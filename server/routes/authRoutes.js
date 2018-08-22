const mongoose = require('mongoose')
const users = mongoose.model('users')

module.exports = (app) => {
    app.post('/auth/signup', async (req, res) => {
        
    const existingUser = await users.findOne({email: req.body.email})
        
        if(existingUser) {
            res.send({status: 'exists', user: null})
        } else {
            const user = await new users({
                email: req.body.email,
                password: req.body.password,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                phone: req.body.phone
             })
            .save().catch()
    
            const existingUser = await users.findOne({email: req.body.email, password: req.body.password})

            res.send({
                user: existingUser,
                status: 'in'}).catch()
        }         
       
    });

    app.post('/auth/login', async (req, res) => {
        
        const existingUser = await users.findOne({email: req.body.email, password: req.body.password})
        
        if(existingUser) {
            res.send({status: 'found', user: existingUser})
        } else {
            res.send({status: 'notfound', user: null})
        }
        
    });

}