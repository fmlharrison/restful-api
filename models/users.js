// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var userSchema = new mongoose.Schema({
  email: String,
  forename: String,
  surname: String
  },
  { timestamps: { createdAt: 'created_at'}
});

// Return model
module.exports = restful.model('User', userSchema);
