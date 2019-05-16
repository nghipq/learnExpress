var User = require('../models/users.model')
var md5 = require('md5');

module.exports.login = (req, res) => res.render('auth/login');
module.exports.postLogin = async function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var findUser = await User.find({email: email});
    var user = findUser[0];
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

    res.cookie('userId', user._id, {
        signed: true
    })

    res.redirect('/user')
}

module.exports.join = (req, res) => res.render('auth/join');
module.exports.postJoin = async function(req, res) {
    req.body.password = md5(req.body.password);
    await User.create(req.body)
    res.redirect('/auth/login');
}
