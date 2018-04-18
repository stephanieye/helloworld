const mongoose  = require('mongoose');
mongoose.Promise = require('bluebird');

const { databaseURI } = require('../config/environment');
mongoose.connect(databaseURI);


const Park = require('../models/park');
const User = require('../models/user');


Park.collection.drop();
User.collection.drop();


User
.create([{
  username: 'Ms Jane Austen',
  email: 'jane@austen.com',
  password: 'jane',
  passwordConfirmation: 'jane',
  url: 'https://www.biography.com/.image/t_share/MTE1ODA0OTcxNTQ2ODcxMzA5/jane-austen-9192819-1-402.jpg'
}, {username: 'Mr Charles Dickens',
email: 'charles@dickens.com',
password: 'charles',
passwordConfirmation: 'charles',
url: 'https://www.biography.com/.image/t_share/MTI2NzE5OTAwMjQzNzMzMTIz/charles-dickens-600x487jpg.jpg'}])

.then(users => {
  console.log(`${users.length} users created`);
  return Park
  .create([{
    photo: 'https://www.royalparks.org.uk/parks/hyde-park/things-to-see-and-do/memorials,-fountains-and-statues/diana-memorial-fountain/_gallery/Diana-Memorial-Fountain-from-across-the-Serpentine.jpg/w_1200.jpg',
    parkname: 'Hyde Park',
    googlemap: 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJhRoYKUkFdkgRDL20SU9sr9E&key=AIzaSyBBu3XA9wXX6D-fNiHMANhgkHnNKsF4c6w',
    reviews: [{
      time: 'Mon Jan 07 2018 21:09:09 GMT',
      title: 'A beautiful park',
      content: 'Love the swans',
      rating: 4,
      reviewer: 'Ms Jane Austen',
      user: users[0]
    }, {
      time: 'Sat Dec 25 2017 21:09:09 GMT',
      title: 'Good for dog-walking',
      content: 'Just make sure they don\'t run into the lake!',
      rating: 4,
      reviewer: 'Mr Charles Dickens',
      user: users[1]
    }]
  },{
    photo: 'https://www.hackneytennis.co.uk/wordpress/wp-content/uploads/2015/11/london_fields_1.jpg',
    parkname: 'London Fields',
    googlemap: 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJR2uYCeYcdkgRx1pVpFWvdQM&key=AIzaSyBBu3XA9wXX6D-fNiHMANhgkHnNKsF4c6w',
    reviews: [{
      time: 'Sat Dec 25 2017 21:09:09 GMT',
      title: 'Good for BBQs',
      content: 'Great place to spend a sunny afternoon drinking beer with your friends',
      rating: 4,
      reviewer: 'Ms Jane Austen',
      user: users[0]
    }, {
      time: 'Sat Dec 25 2017 21:09:09 GMT',
      title: 'Good for dog-walking',
      content: 'Just make sure they don\'t run into the cycle path!',
      rating: 3,
      reviewer: 'Mr Charles Dickens',
      user: users[1]
    }]
  },{
    photo: 'https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/620/cached.offlinehbpl.hbpl.co.uk/news/WOH/AerialViewofModelBoatingPondCREDCoL-20170530042222415.jpg',
    parkname: 'Hampstead Heath',
    googlemap: 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJIzJDyggadkgROFAV19Ti070&key=AIzaSyBBu3XA9wXX6D-fNiHMANhgkHnNKsF4c6w',
    reviews: [{
      time: 'Mon Jan 07 2018 21:09:09 GMT',
      title: 'Skinny-dipping...',
      content: 'The colder the better!',
      rating: 4,
      reviewer: 'Ms Jane Austen',
       user: users[0]
    }, {
      time: 'Sat Dec 25 2017 21:09:09 GMT',
      title: 'Good for dog-walking',
      content: 'Just make sure they don\'t run into the baths!',
      rating: 1,
      reviewer: 'Mr Charles Dickens',
      user: users[1]
    }]
  },{
    photo: 'http://cdn.ltstatic.com/2007/May/XT897956_942long.jpg',
    parkname: 'Potters Fields Park',
    googlemap: 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJfdkOjEUDdkgRYGBQ5bvKWlo&key=AIzaSyBBu3XA9wXX6D-fNiHMANhgkHnNKsF4c6w',
    reviews: [{
      time: 'Sat Dec 25 2017 21:09:09 GMT',
      title: 'Great view of Tower Bridge',
      content: 'The nearby Bridge Theatre is great too!',
      rating: 4,
      reviewer: 'Ms Jane Austen',
       user: users[0]
    }, {
      time: 'Sat Dec 25 2017 21:09:09 GMT',
      title: 'Good for dog-walking',
      content: 'Just make sure they don\'t run into the river!',
      rating: 5,
      reviewer: 'Mr Charles Dickens',
      user: users[1]
    }]
  },{
    photo: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Victoria_Park_bandstand.JPG',
    parkname: 'Victoria Park',
    googlemap: 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJHUND2RgddkgRarf7ZQfLCw4&key=AIzaSyBBu3XA9wXX6D-fNiHMANhgkHnNKsF4c6w',
    reviews: [{
      time: 'Sat Dec 25 2017 21:09:09 GMT',
      title: 'Boating lake!',
      content: 'Definitely rent a boat and go for a row!',
      rating: 4,
      reviewer: 'Ms Jane Austen',
      user: users[0]
    }, {
      time: 'Sat Dec 25 2017 21:09:09 GMT',
      title: 'Good for dog-walking',
      content: 'Just make sure they don\'t run into the lake!',
      rating: 2,
      reviewer: 'Mr Charles Dickens',
      user: users[1]
    }]
  },{
    photo: 'http://cdn.ltstatic.com/2006/August/AU501314_942long.jpg',
    parkname: 'Postman\'s Park',
    googlemap: 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJNz1L7lQbdkgRHKuTVhZjwx0&key=AIzaSyBBu3XA9wXX6D-fNiHMANhgkHnNKsF4c6w',
    reviews: [{
      time: 'Sat Dec 25 2017 21:09:09 GMT',
      title: 'Lovely lunch spot',
      content: 'A quiet oasis in the city',
      rating: 4,
      reviewer: 'Ms Jane Austen',
       user: users[0]
    }, {
      time: 'Sat Dec 25 2017 21:09:09 GMT',
      title: 'Good for dog-walking',
      content: 'Just make sure they don\'t run into the road!',
      rating: 2,
      reviewer: 'Mr Charles Dickens',
      user: users[1]
    }]
  },{
    photo: 'https://www.royalparks.org.uk/_media/images/greenwich-park/cover-photos/Greenwich-Park-cover-photo.jpg/w_768.jpg',
    parkname: 'Greenwich Park',
    googlemap: 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJaeUYnoQCdkgR0Fxns5NICw4&key=AIzaSyBBu3XA9wXX6D-fNiHMANhgkHnNKsF4c6w',
    reviews: [{
      time: 'Sat Dec 25 2017 21:09:09 GMT',
      title: 'Greenest part of London',
      content: 'Definitely visit the observatory!',
      rating: 4,
      reviewer: 'Ms Jane Austen',
        user: users[0]
    }, {
      time: 'Sat Dec 25 2017 21:09:09 GMT',
      title: 'Good for dog-walking',
      content: 'Just make sure they don\'t run into the observatory!',
      rating: 1,
      reviewer: 'Mr Charles Dickens',
      user: users[1]
    }]
  },{
    photo: 'https://www.gardenvisit.com/uploads/image/image/163/16333/regents_park_1408_jpg_original.jpg',
    parkname: 'Regent\'s Park',
    googlemap: 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJc8TTcd8adkgRcx43bnFBKPU&key=AIzaSyBBu3XA9wXX6D-fNiHMANhgkHnNKsF4c6w',
    reviews: [{
      time: 'Mon Jan 07 2018 21:09:09 GMT',
      title: 'More than just the zoo',
      content: 'Lovely for an afternoon\'s ramble',
      rating: 4,
      reviewer: 'Ms Jane Austen',
      user: users[0]
    }, {
      time: 'Mon Jan 07 2018 21:09:09 GMT',
      title: 'Good for dog-walking',
      content: 'Just make sure they don\'t run into the zoo!',
      rating: 5,
      reviewer: 'Mr Charles Dickens',
      user: users[1]
    }]
  },{
    photo: 'http://www.adrianmoysey.co.uk/img/s6/v151/p1043080770-3.jpg',
    parkname: 'Richmond Park',
    googlemap: 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ_dGXYaUOdkgRjQQ6Whq-jBM&key=AIzaSyBBu3XA9wXX6D-fNiHMANhgkHnNKsF4c6w',
    reviews: [{
      time: 'Sat Dec 25 2017 21:09:09 GMT',
      title: 'Magnificent stags',
      content: 'Really makes you feel close to nature',
      rating: 4,
      reviewer: 'Ms Jane Austen',
      user: users[0]
    }, {
      time: 'Sat Dec 25 2017 21:09:09 GMT',
      title: 'Good for dog-walking',
      content: 'Just make sure they don\'t run into the stags!',
      rating: 2,
      reviewer: 'Mr Charles Dickens',
      user: users[1]
    }]
  }])
})
.catch(err => console.log(err))
.finally(()=> mongoose.connection.close());
