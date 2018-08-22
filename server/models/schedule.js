const mongoose = require('mongoose');
const {Schema} = mongoose;
const dailySchema = require('./dailySchedule')

const scheduleSchema = new Schema({
    _doctor: { type: Schema.Types.ObjectId, ref: 'doctors' },
    oldestDate: {date: Number, month: Number, year: Number}, 
    latestDate: {date: Number, month: Number, year: Number},
    dailySchedule: [dailySchema]
})

mongoose.model('schedules', scheduleSchema)
const sss = mongoose.model('schedules')
