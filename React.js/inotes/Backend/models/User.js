const mongoose = require('mongoose');
const { Schema } = mongoose;
const uniqueValidator = require('mongoose-unique-validator')

const UserSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        uniqueCaseInsensitive: true,
        required: true
    },
    password: {
        type: String,
        unique: true,
        required: true
    }
    // date: {
    //     type: date,
    //     default: Date.now
    // }
}
);
const User =  mongoose.model('user', UserSchema);
UserSchema.plugin(uniqueValidator,{
    message: '{VALUE} is already exist'
})
module.exports = User;