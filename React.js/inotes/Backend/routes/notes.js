const express = require('express');
const Router = express.Router();
const Notes  = require('../models/Notes');
var fetchuser = require('../Middleware/Fetchuser');
const {validationResult, body } = require('express-validator');
//* Get all the notes 

Router.get('/fetchAllNotes',fetchuser,async (req,res)=>{
    const notes = await Notes.find({user: req.user.id}); //* req.user contsins user from fetchuser
    res.json([notes]);
})

//post req to add a new note api/addnote
Router.post('/addnote',fetchuser,[
    body('title','Enter a valid title').isLength({min:3}),
    body('description','Enter a valid description').isLength({min: 5}),

],async (req,res)=>{
    try {
        const { title, description, tag } = req.body;

        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save()

        res.json(savedNote)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = Router;