const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
  title: {type: String, required: true},
  content: { type: String, required: true },
  reviewer: {type: String, required: true},
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  time: { type: String }
});



const parkSchema = new mongoose.Schema({
  photo: String,
  parkname: {type: String, required: true},
  reviews: [ reviewSchema ]
});


module.exports = mongoose.model('Park', parkSchema);
