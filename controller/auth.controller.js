var db = require('../db');
var shortid = require('shortid');
var md5 = require('md5');

module.exports.login = (req, res) => res.render('auth/login');
module.exports.postLogin = function(req, res) {
    var email = req.body.email;
    var password = req.body.password
    var user = db.get('users').find({email: email}).value();
    var hashedPassword = md5(password)
    if(!user) {
        res.render('auth/login', {
            errors: [
                'User does not exist'
            ],
        values: req.body    
        })
        return;
    }
    if(user.password != hashedPassword) {
        res.render('auth/login', {
            errors: [
                'Password is wrong!'
            ],
        values: req.body    
        })
        return;
    }
    res.cookie('userId', user.id, {
        signed: true
    })
    res.redirect('/user')
}
