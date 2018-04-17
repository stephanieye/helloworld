const mongoose  = require('mongoose');
mongoose.Promise = require('bluebird');

const { databaseURI } = require('../config/environment');
mongoose.connect(databaseURI);


const Park = require('../models/park');


Park.collection.drop();



Park.create([{
  photo: 'https://www.royalparks.org.uk/parks/hyde-park/things-to-see-and-do/memorials,-fountains-and-statues/diana-memorial-fountain/_gallery/Diana-Memorial-Fountain-from-across-the-Serpentine.jpg/w_1200.jpg',
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
  photo: 'https://www.hackneytennis.co.uk/wordpress/wp-content/uploads/2015/11/london_fields_1.jpg',
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
  photo: 'https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/620/cached.offlinehbpl.hbpl.co.uk/news/WOH/AerialViewofModelBoatingPondCREDCoL-20170530042222415.jpg',
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
  photo: 'http://cdn.ltstatic.com/2007/May/XT897956_942long.jpg',
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
  photo: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Victoria_Park_bandstand.JPG',
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
  photo: 'http://cdn.ltstatic.com/2006/August/AU501314_942long.jpg',
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
  photo: 'https://www.royalparks.org.uk/_media/images/greenwich-park/cover-photos/Greenwich-Park-cover-photo.jpg/w_768.jpg',
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
  photo: 'https://www.gardenvisit.com/uploads/image/image/163/16333/regents_park_1408_jpg_original.jpg',
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
    photo: 'https://i.ytimg.com/vi/KyepI40oCNQ/maxresdefault.jpg',
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
