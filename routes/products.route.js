var express = require('express');
var router = express.Router();

var sessionMiddleware = require('../middleware/session.middleware')

router.use(sessionMiddleware);
router.get('/')

module.exports = router