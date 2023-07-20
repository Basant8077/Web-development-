var jwt = require('jsonwebtoken');
const Notes = require('../models/Notes');
const JWT_SECRET = "HloBasantvicky"
const fetchuser = (req , res, next) => {
    try {
        //get a jwt tyoken and add id to the req object
        const token = req.header('auth-token')
        if(!token){
            res.status(401).send({Error: "Enter a valid token"});
        }

        const decodedData = jwt.verify(token,JWT_SECRET);
        req.user = decodedData.user; // now we can get user
        next();
      } catch(error) {
        console.log(err.message)
        res.status(401).send({Error: "Wrong entry error"})
      }
 
}
module.exports = fetchuser;