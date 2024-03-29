const express = require('express');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const User = require('../models/User')
const { query, validationResult, body } = require('express-validator');
const Router = express.Router();
const saltRounds = 10;
const JWT_SECRET = "HloBasantvicky" //any string can become jwtsecret
var fetchuser = require('../Middleware/Fetchuser');

//* ROUTE 1: create a user using: POST "/api/auth/createUser" ,No Auth required

Router.post('/createUser', [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body("password", "To short").trim().isLength({ min: 8 })
], async (req, res) => {

    const error = validationResult(req);

    //!if there will be error it will go inside if to show

    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }
    try {
        let user = await User.findOne({ email: req.body.email });

        if (user) {
            return res.status(400).json({ errors: "This Email already exists" });
        }
        //* convert normal password to a hash password + add salt th given above

        const secPassword = await bcrypt.hash(req.body.password, saltRounds);

        user = await User.create({
            name: req.body.name,
            password: secPassword,
            email: req.body.email,
        })

        const data = {  //! should be unique and accesing a db using id is fast as compare to other things
            user: {
                id: user.id
            }
        }

        const JWT_TOKEN = jwt.sign(data, JWT_SECRET);
        res.json({ JWT_TOKEN })

        // res.json(user)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }

})

//?b ROUTE 2   Authenticate a user using /api/login  . no login required



Router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body("password", "To short").exists().trim().isLength({ min: 8 })
], async (req, res) => {

    let success = false;
    const error = validationResult(req);

    //!if there will be error it will go inside if to show

    if (!error.isEmpty()) {
        return res.status(400).json({ success, errors: error.array() });
    }

    const { email, password } = req.body; //destructure entered email and password by user 

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success, errors: "Try to login with correct info" });
        }
        const passwordcompare = await bcrypt.compare(password, user.password);
        if (!passwordcompare) {
            return res.status(400).json({ success, errors: "Try to login with correct info" });
        }

        const data = {  //! should be unique and accesing a db using id is fast as compare to other things
            user: {
                id: user.id
            }
        }

        const JWT_TOKEN = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success,JWT_TOKEN })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }
})

//todo:  ROUTE 3:- GET LOGGED IN USER DETAILS using post /api/auth/getuser "Login required"
try {

    Router.post('/getuser',fetchuser, async (req, res) => {

      
        const userId = req.user.id
        const user = await User.findById(userId).select("-password") //we will get everything except password
        res.send(user)

    })
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error")
}

module.exports = Router;