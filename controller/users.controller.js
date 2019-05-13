var db = require('../db');
var shortid = require('shortid');

module.exports.index = function(req, res) {
    var user = db.get('users').find({id: req.signedCookies.userId}).value();
    res.render('users/index', {
        user: user
    })
}

module.exports.search = function(req, res) {
    var q = req.query.q;
    var users = db.get('users').value();
    var matchedUsers = users.filter(function(user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) != -1;
    });
    res.render('users/index', {
        users: matchedUsers,
        q: q
    });
}

module.exports.create = function(res, req) {
    res.render('users/create')
}