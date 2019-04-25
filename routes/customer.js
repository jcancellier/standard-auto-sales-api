var express = require('express');
var router = express.Router();
var controller = require('../controllers').customer;

router.get('/', controller.findAll);
router.post('/', controller.add);

module.exports = router;