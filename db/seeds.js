const mongoose  = require('mongoose');
mongoose.Promise = require('bluebird');

const { databaseURI } = require('../config/environment');
mongoose.connect(databaseURI);


const Park = require('../models/park');


Park.collection.drop();



Park.create([{
  parkname: 'Hyde Park',
  reviews: [{
    title: 'A beautiful park',
    content: 'Love the swans',
    reviewer: 'Ms Jane Austen'
}, {
  title: 'Good for dog-walking',
  content: 'Just make sure they don\'t run into the lake!',
  reviewer: 'Mr James Herriott'
}]
},{
  parkname: 'London Fields',
  reviews: [{
    title: 'Good for BBQs',
    content: 'Great place to spend a sunny afternoon drinking beer with your friends',
    reviewer: 'Ms Jane Austen'
}, {
  title: 'Good for dog-walking',
  content: 'Just make sure they don\'t run into the cycle path!',
  reviewer: 'Mr James Herriott'
}]
},{
  parkname: 'Hampstead Heath',
  reviews: [{
    title: 'Skinny-dipping...',
    content: 'The colder the better!',
    reviewer: 'Ms Jane Austen'
}, {
  title: 'Good for dog-walking',
  content: 'Just make sure they don\'t run into the baths!',
  reviewer: 'Mr James Herriott'
}]
},{
  parkname: 'Potters Fields Park',
  reviews: [{
    title: 'Great view of Tower Bridge',
    content: 'The nearby Bridge Theatre is great too!',
    reviewer: 'Ms Jane Austen'
}, {
  title: 'Good for dog-walking',
  content: 'Just make sure they don\'t run into the river!',
  reviewer: 'Mr James Herriott'
}]
},{
  parkname: 'Victoria Park',
  reviews: [{
    title: 'Boating lake!',
    content: 'Definitely rent a boat and go for a row!',
    reviewer: 'Ms Jane Austen'
}, {
  title: 'Good for dog-walking',
  content: 'Just make sure they don\'t run into the lake!',
  reviewer: 'Mr James Herriott'
}]
},{
  parkname: 'Postman\'s Park',
  reviews: [{
    title: 'Lovely lunch spot',
    content: 'A quiet oasis in the city',
    reviewer: 'Ms Jane Austen'
}, {
  title: 'Good for dog-walking',
  content: 'Just make sure they don\'t run into the road!',
  reviewer: 'Mr James Herriott'
}]
},{
  parkname: 'Greenwich Park',
  reviews: [{
    title: 'Greenest part of London',
    content: 'Definitely visit the observatory!',
    reviewer: 'Ms Jane Austen'
}, {
  title: 'Good for dog-walking',
  content: 'Just make sure they don\'t run into the observatory!',
  reviewer: 'Mr James Herriott'
}]
},{
  parkname: 'Regent\'s Park',
  reviews: [{
    title: 'More than just the zoo',
    content: 'Lovely for an afternoon\'s ramble',
    reviewer: 'Ms Jane Austen'
}, {
  title: 'Good for dog-walking',
  content: 'Just make sure they don\'t run into the zoo!',
  reviewer: 'Mr James Herriott'
}]
},{
  parkname: 'Richmond Park',
  reviews: [{
    title: 'Magnificent stags',
    content: 'Really makes you feel close to nature',
    reviewer: 'Ms Jane Austen'
}, {
  title: 'Good for dog-walking',
  content: 'Just make sure they don\'t run into the stags!',
  reviewer: 'Mr James Herriott'
}]
}])
  .catch(err => console.log(err))
  .finally(()=> mongoose.connection.close());
