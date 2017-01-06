// Dependencies
var express = require('express');
var router = express.Router();

// Routes
router.get('/users', function(req, res) {
  res.send('API is working');
});

// Return Router
module.exports = router;
