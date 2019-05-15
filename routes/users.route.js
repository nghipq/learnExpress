var express = require('express');
var multer  = require('multer');

var router = express.Router();
var upload = multer({ dest: './public/uploads/' })

var controller = require('../controller/users.controller');
var cartRoute = require('./cart.route')

var validate = require('../middleware/users.validate');

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create)
enctype="multipart/form-data"
router.post('/create',
    upload.single('img'),
    controller.postCreate)

module.exports = router