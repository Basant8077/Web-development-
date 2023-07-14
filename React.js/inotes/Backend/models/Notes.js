const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: "Genearl"
    },
    date: {
        type: date,
        default: Date.now
    }}
);

module.exports = mongoose.model('Notes' ,NotesSchema )
