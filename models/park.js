const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
  title: {type: String, required: true},
  content: { type: String, required: true },
  reviewer: {type: String, required: true},
  rating: {type: Number, min: 1, max: 5, default: 3},
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  userid: String,
  time: { type: String }
});



const parkSchema = new mongoose.Schema({
  photo: String,
  parkname: {type: String, required: true},
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  reviews: [ reviewSchema ]
});

module.exports = mongoose.model('Review', reviewSchema);
module.exports = mongoose.model('Park', parkSchema);
