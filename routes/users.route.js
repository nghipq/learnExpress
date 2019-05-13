var express = require('express');
var router = express.Router();

var controller = require('../controller/users.controller');

var validate = require('../middleware/users.validate');

router.get('/', controller.index);

router.get('/search', controller.search)

module.exports = router