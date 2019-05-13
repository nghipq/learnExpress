var express = require('express');
var router = express.Router();

var controller = require('../controller/users.controller');

var validate = require('../middleware/users.validate');

router.get('/', controller.index);

router.get('/search', controller.search)

router.get('/create', controller.create)

router.post('/create', controller.postCreate)

module.exports = router