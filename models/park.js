const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
  title: {type: String},
  content: { type: String },
  reviewer: {type: String}, 
  user: {type: mongoose.Schema.ObjectId, ref: 'User'}
});



const parkSchema = new mongoose.Schema({
  photo: String,
  parkname: {type: String, required: true},
  reviews: [ reviewSchema ]
});


module.exports = mongoose.model('Park', parkSchema);
