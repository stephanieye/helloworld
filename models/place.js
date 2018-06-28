const mongoose = require('mongoose');
const moment = require('moment');


const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  commenter: {type: mongoose.Schema.ObjectId, ref: 'User'}
}, {
  timestamps: true
});

commentSchema.virtual('createdAtRelative')
  .get(function(){
    return moment(this.createdAt).fromNow();
  });

commentSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.createdAt;
    delete json.updatedAt;
    return json;
  }
});

const placeSchema = new mongoose.Schema({
  photo: {type: String, default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1200px-The_Earth_seen_from_Apollo_17.jpg'},
  name: String,
  location: String,
  datestart: Date,
  dateend: Date,
  rating: Number,
  notes: String,
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  comments: [ commentSchema ]
});


module.exports = mongoose.model('place', placeSchema);
