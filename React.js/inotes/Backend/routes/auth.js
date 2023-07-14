const express = require('express');
const User = require('../models/User')
const Router = express.Router(); 

//create a user using: POST "/api/auth/" , doesn't require auth

Router.post('/', (req,res)=>{
    const user = User(req.body);
    user.save()
    res.send(req.body)
})

module.exports = Router;