const { body, validationResult } = require('express-validator');
const User = require('../services/user');
var express = require('express')
var router = express.Router()

router.post('/account/login', function(req, res) {
    console.log(req.body)
    var email = req.body.email
    email.isEmail()
    .normalizeEmail()
    .custom(async function(email){
        const found = await User.findByEmail(email);
        if(found){
            throw Error('User exists');
        }
        return true;
    })
    res.send({token: 'ABCxyz', user: 'user'})
})

module.exports = router