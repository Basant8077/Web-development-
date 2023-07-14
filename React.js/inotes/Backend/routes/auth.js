const express = require('express');
const Router = express.Router(); 

Router.get('/', (req,res)=>{
    obj = {
        a: "basant",
        Number: 124
    }
    res.json(obj)
})

module.exports = Router;