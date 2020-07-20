const mongoose = require('mongoose');
const { Schema } = mongoose; 
const { model } = mongoose;

const userSchema = new Schema({
    googleId: String, 
    name: String,
    credits: { type: Number, default: 0 }
});

model('users', userSchema);

