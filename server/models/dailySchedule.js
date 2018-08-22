const mongoose = require('mongoose');
const { Schema } = mongoose;
const dailySchema = new Schema({
  date: Number,
  month: Number,
  year: Number,
  availableToday: [{hour: Number, minute: Number}]
});

module.exports = dailySchema;