var express = require('express');
var router = express.Router();
const EventController = require('../controllers/EventController');

const Event = require('../models/Events');

// router.route('/').post(EventController.addEvent);
// router.route('/').get(EventController.getAllEvents);

router.get('/', (req, res) => {
  Event.find()
  .then(events => {
    res.json({
      confirmation: 'success',
      data: events
    })
  }).catch(err => {
    res.json({
      confirmation: 'failure',
      message: err.message
    })
  });
});


module.exports = router;