const mongoose  = require('mongoose');
mongoose.Promise = require('bluebird');

const { databaseURI } = require('../config/environment');
mongoose.connect(databaseURI);

const Review = require('../models/review');
const Park = require('../models/park');

Review.collection.drop();
Park.collection.drop();

Review.create([{
  title: 'Good for bird-watching',
  date: new Date(2015, 07, 15),
  rating: 5,
  comment: 'A lot of swans.'
},{
  title: 'BBQ hangout',
  date: new Date(2018, 06, 10),
  rating: 5,
  comment: 'Yum.'
},{
  title: 'Lots of exercise facilities',
  date: new Date(2015, 11, 19),
  rating: 3,
  comment: 'Nice playground.'
}])

.catch(err => console.log(err))
.finally(()=> mongoose.connection.close())


Park.create([{
  parkname: 'Hyde Park',
},{
  parkname: 'London Fields'
},{
  parkname: 'Hampstead Heath'
}])
.catch(err => console.log(err))
.finally(()=> mongoose.connection.close())
