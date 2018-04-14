const mongoose = require('mongoose');

const parkSchema = new mongoose.Schema({
  parkname: {type: String, required: true},
  reviews: [{type: mongoose.Schema.ObjectId, ref: 'Review'}]
});


module.exports = mongoose.model('Park', parkSchema);
