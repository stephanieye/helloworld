const mongoose = require('mongoose');
const moment = require('moment');


const reviewSchema = new mongoose.Schema({
  title: {type: String, required: true},
  content: { type: String, required: true },
  rating: {type: Number, min: 1, max: 5, default: 3},
  reviewer: {type: mongoose.Schema.ObjectId, ref: 'User'}
}, {
  timestamps: true
});

reviewSchema.virtual('createdAtRelative')
  .get(function(){
    return moment(this.createdAt).fromNow();
  });

reviewSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.createdAt;
    delete json.updatedAt;
    return json;
  }
});

const parkSchema = new mongoose.Schema({
  photo: String,
  name: {type: String, required: true, unique: true},
  location: {
    lat: {type: Number, required: true},
    lng: {type: Number, required: true}
  },
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  reviews: [ reviewSchema ]
});


parkSchema.virtual('avgRating')
  .get(function(){
    return this.reviews.reduce((sum, review) => sum + review.rating, 0) / this.reviews.length;
  });

parkSchema.set('toJSON', {
  virtuals: true
});


module.exports = mongoose.model('Park', parkSchema);
