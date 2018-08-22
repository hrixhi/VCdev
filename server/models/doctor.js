const mongoose = require('mongoose');
const {Schema} = mongoose;

const doctorSchema = new Schema({
    firstname: String,
    lastname: String,
    clinic: String,
    lat: Number,
    long: Number,
    address: String,
    phone: String,
    type: String,
    price: String
})

mongoose.model('doctors', doctorSchema)
