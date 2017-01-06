// Dependencies
var express = require('express');
var router = express.Router();

// Bring in the User model
var User = require('../models/users');

// Routes
User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/users'); //This will register an endpoint for the api on the router (which is our 'app').

// Return Router
module.exports = router;
