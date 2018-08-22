const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    email: String,
    password: String,
    firstname: String,
    lastname: String,
    phone: Number
})

mongoose.model('users', userSchema)

