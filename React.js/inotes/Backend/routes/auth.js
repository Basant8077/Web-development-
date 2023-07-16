const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User')
const { query, validationResult, body } = require('express-validator');
const Router = express.Router();
const saltRounds = 10;

//*create a user using: POST "/api/auth/createUser" ,No Auth required

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
    let user = await User.findOne({email: req.body.email});

    if(user){
        return res.status(400).json({ errors: "This Email already exists" });
    }
    
   const secPassword = await bcrypt.hash(req.body.password, saltRounds);

    user = await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
    })
    res.send(user)
}
 catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured")
}

})

module.exports = Router;