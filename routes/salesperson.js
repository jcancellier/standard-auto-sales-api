var express = require('express');
var router = express.Router();
var controller = require('../controllers').salesperson;

router.get('/', controller.findAll);
router.get('/:id', controller.findById);

module.exports = router;
