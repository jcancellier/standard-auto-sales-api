var express = require('express');
var router = express.Router();
var controller = require('../controllers').sale;

router.post('/', controller.add);

module.exports = router;