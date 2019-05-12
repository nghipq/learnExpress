var db = require('../db');
var shortid = require('shortid');

module.exports.login = (req, res) => res.render('auth/login')
