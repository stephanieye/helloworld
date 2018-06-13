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
    url: 'https://www.biography.com/.image/t_share/MTI2NzE5OTAwMjQzNzMzMTIz/charles-dickens-600x487jpg.jpg'}, {
    username: 'Ms Emily Brontë',
    email: 'emily@bronte.com',
    password: 'emily',
    passwordConfirmation: 'emily',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Emily_Bront%C3%AB_by_Patrick_Branwell_Bront%C3%AB_restored.jpg/220px-Emily_Bront%C3%AB_by_Patrick_Branwell_Bront%C3%AB_restored.jpg'
  }])

  .then(users => {
    console.log(`${users.length} users created`);
    return Park
      .create([{
        photo: 'https://www.royalparks.org.uk/parks/hyde-park/things-to-see-and-do/memorials,-fountains-and-statues/diana-memorial-fountain/_gallery/Diana-Memorial-Fountain-from-across-the-Serpentine.jpg/w_1200.jpg',
        name: 'Hyde Park',
        location: '51.507268, -0.165730',
        reviews: [{
          time: 'Mon, Jan 07 2018 21:09:09 GMT',
          title: 'A beautiful park',
          content: 'Love the swans',
          rating: 4,
          reviewer: users[0]
        }, {
          time: 'Sat, Dec 25 2017 21:09:09 GMT',
          title: 'Good for dog-walking',
          content: 'Just make sure they don\'t run into the lake!',
          rating: 4,
          reviewer: users[1]
        }, {
          time: 'Sat, Dec 25 2017 21:09:09 GMT',
          title: 'Wuthering',
          content: 'Wuthering wuthering heights!',
          rating: 4,
          reviewer: users[2]
        }]
      },{
        photo: 'https://www.hackneytennis.co.uk/wordpress/wp-content/uploads/2015/11/london_fields_1.jpg',
        name: 'London Fields',
        location: '51.542292, -0.061510',
        reviews: [{
          time: 'Sat, Dec 25 2017 21:09:09 GMT',
          title: 'Good for BBQs',
          content: 'Great place to spend a sunny afternoon drinking beer with your friends',
          rating: 4,
          reviewer: users[0]
        }, {
          time: 'Sat, Dec 25 2017 21:09:09 GMT',
          title: 'Good for dog-walking',
          content: 'Just make sure they don\'t run into the cycle path!',
          rating: 3,
          reviewer: users[1]
        },{
          time: 'Sat, Dec 25 2017 21:09:09 GMT',
          title: 'Wuthering',
          content: 'Wuthering wuthering heights!',
          rating: 4,
          reviewer: users[2]
        }]
      },{
        photo: 'https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/620/cached.offlinehbpl.hbpl.co.uk/news/WOH/AerialViewofModelBoatingPondCREDCoL-20170530042222415.jpg',
        name: 'Hampstead Heath',
        location: '51.560842, -0.163138',
        reviews: [{
          time: 'Mon, Jan 07 2018 21:09:09 GMT',
          title: 'Skinny-dipping...',
          content: 'The colder the better!',
          rating: 4,
          reviewer: users[0]
        }, {
          time: 'Sat, Dec 25 2017 21:09:09 GMT',
          title: 'Good for dog-walking',
          content: 'Just make sure they don\'t run into the baths!',
          rating: 1,
          reviewer: users[1]
        },{
          time: 'Sat, Dec 25 2017 21:09:09 GMT',
          title: 'Wuthering',
          content: 'Wuthering wuthering heights!',
          rating: 4,
          reviewer: users[2]
        }]
      },{
        photo: 'http://cdn.ltstatic.com/2007/May/XT897956_942long.jpg',
        name: 'Potters Fields',
        location: '51.560842, -0.163138',
        reviews: [{
          time: 'Sat, Dec 25 2017 21:09:09 GMT',
          title: 'Great view of Tower Bridge',
          content: 'The nearby Bridge Theatre is great too!',
          rating: 4,
          reviewer: users[0]
        }, {
          time: 'Sat, Dec 25 2017 21:09:09 GMT',
          title: 'Good for dog-walking',
          content: 'Just make sure they don\'t run into the river!',
          rating: 5,
          reviewer: users[1]
        },{
          time: 'Sat, Dec 25 2017 21:09:09 GMT',
          title: 'Wuthering',
          content: 'Wuthering wuthering heights!',
          rating: 4,
          reviewer: users[2]
        }]
      },{
        photo: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Victoria_Park_bandstand.JPG',
        name: 'Victoria Park',
        location: '51.536561, -0.038972',
        reviews: [{
          time: 'Sat, Dec 25 2017 21:09:09 GMT',
          title: 'Boating lake!',
          content: 'Definitely rent a boat and go for a row!',
          rating: 4,
          reviewer: users[0]
        }, {
          time: 'Sat, Dec 25 2017 21:09:09 GMT',
          title: 'Good for dog-walking',
          content: 'Just make sure they don\'t run into the lake!',
          rating: 2,
          reviewer: users[1]
        },{
          time: 'Sat, Dec 25 2017 21:09:09 GMT',
          title: 'Wuthering',
          content: 'Wuthering wuthering heights!',
          rating: 4,
          reviewer: users[2]
        }]
      },{
        photo: 'http://cdn.ltstatic.com/2006/August/AU501314_942long.jpg',
        name: 'Postman\'s Park',
        location: '51.516767, -0.097715',
        reviews: [{
          time: 'Sat, Dec 25 2017 21:09:09 GMT',
          title: 'Lovely lunch spot',
          content: 'A quiet oasis in the city',
          rating: 4,
          reviewer: users[0]
        }, {
          time: 'Sat, Dec 25 2017 21:09:09 GMT',
          title: 'Good for dog-walking',
          content: 'Just make sure they don\'t run into the road!',
          rating: 2,
          reviewer: users[1]
        },{
          time: 'Sat, Dec 25 2017 21:09:09 GMT',
          title: 'Wuthering',
          content: 'Wuthering wuthering heights!',
          rating: 4,
          reviewer: users[2]
        }]
      },{
        photo: 'https://www.royalparks.org.uk/_media/images/greenwich-park/cover-photos/Greenwich-Park-cover-photo.jpg/w_768.jpg',
        name: 'Greenwich Park',
        location: '51.476909, 0.001464',
        reviews: [{
          time: 'Sat, Dec 25 2017 21:09:09 GMT',
          title: 'Greenest part of London',
          content: 'Definitely visit the observatory!',
          rating: 4,
          reviewer: users[0]
        }, {
          time: 'Sat, Dec 25 2017 21:09:09 GMT',
          title: 'Good for dog-walking',
          content: 'Just make sure they don\'t run into the observatory!',
          rating: 1,
          reviewer: users[1]
        },{
          time: 'Sat, Dec 25 2017 21:09:09 GMT',
          title: 'Wuthering',
          content: 'Wuthering wuthering heights!',
          rating: 4,
          reviewer: users[2]
        }]
      }]);
  })
  .catch(err => console.log(err))
  .finally(()=> mongoose.connection.close());
