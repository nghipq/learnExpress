var express = require('express');
var router = express.Router();

var controller = require('../controller/auth.controller')
var validate = require('../middleware/auth.valicate')

router.get('/login', controller.login);

module.exports = router