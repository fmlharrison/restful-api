// Dependencies
var require = require('node-restful');
var mongoose = restful.mongoose; //mongo is extending node-restful

// Schema
var userSchema = new mongoose.Schema({
  email: String,
  forename: String,
  surname: String
  },
  { timestamps: { createdAt: 'created_at'}
});

// Return model
module.exports = restful.model('Products', productSchema);
