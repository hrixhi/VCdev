const mongoose = require('mongoose')
const doctors = mongoose.model('doctors')
const schedules = mongoose.model('schedules')

module.exports = (app) => {
    app.post('/doc/search', async (req, res) => {
        
        const lat = Number(req.body.lat);
        const lng = Number(req.body.lng);
        const range = Number(req.body.range);
        
        const latDifference = 0.008993*range;
        const lngDifference = (latDifference/Math.cos(lng*57.2957))*range
            
        const doctorsNearby = await doctors.find({
            lat: {$gte: lat-latDifference, $lte: lat+latDifference},
            long: {$gte: lng-lngDifference, $lte: lng+lngDifference}
        })
        res.send(doctorsNearby)
    });

    app.post('/doc/apts', async (req, res) => {
        
        const schedule = await schedules.findOne({
            _doctor: req.body.docID
        })
        let found = false
        const days = schedule.dailySchedule;
    
        for(var i = 0; i < days.length;i++){

            if(days[i].date===req.body.date) {
                found = true;
                res.send({times: days[i].availableToday, status: 'pass'})
            }
        }

        if(!found) {
            res.send({status: 'fail'})
        }
    });
}