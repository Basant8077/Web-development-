const express = require('express');
const Router = express.Router();
const Notes = require('../models/Notes');
var fetchuser = require('../Middleware/Fetchuser');
const { validationResult, body } = require('express-validator');


// ROUTER 1 :-  api/notes/fetchAllNotes Get all the notes  

Router.get('/fetchAllNotes', fetchuser, async (req, res) => {
    const notes = await Notes.find({ user: req.user.id }); //* req.user contsins user from fetchuser
    res.json([notes]);
})

// POST req to add a new note api/addnote
Router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Enter a valid description').isLength({ min: 5 }),

], async (req, res) => {
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

//ROUTE 3 to update the existing note api/note/updatenote login required
//todo :- put is use to update note. and fetchuser is use for user validation

Router.put('/updateNote/:id', fetchuser, async (req,res) => {

    //create a new note object
    const {title, description,tag}=req.body;
    try {
        // Create a newNote object
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };


        //find the noteto be updated update it
        let note = await Notes.findById(req.params.id); //above id which you want to update /updatenote/:id
        // Now we have the note which you want to update 
        //?case 1 ===> note is not present

        if (!note) { return res.status(404).send("Not Found") }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = Router;