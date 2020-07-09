const mongoose = require('mongoose');
const { Schema } = mongoose; 
const { model } = mongoose;

const userSchema = new Schema({
    googleId: String, 
    name: String
});

model('users', userSchema);

