var express = require('express');
var router = express.Router();

var controller = require('../controller/auth.controller')
var validate = require('../middleware/join.validate')

router.get('/login', controller.login);
router.post('/login', controller.postLogin);

router.get('/join', controller.join)
router.post('/join', validate.postUser, controller.postJoin)

module.exports = router