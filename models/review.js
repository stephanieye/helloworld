
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  title: {type: String, required: true},
  date: {type: Date, required: true},
  rating: {type: Number, min: 1, max: 5, default: 3},
  comment: {type: String, required: true},
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  park: {type: mongoose.Schema.ObjectId, ref: 'Park'}
});


module.exports = mongoose.model('Review', reviewSchema);
