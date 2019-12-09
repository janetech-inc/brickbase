var express = require('express');
var router = express.Router();
const eventController = require('../controllers/eventController');

// router.route('/').post(EventController.addEvent);

router.get('/', eventController.getAllEvents);

module.exports = router;