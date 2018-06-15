const mongoose  = require('mongoose');
mongoose.Promise = require('bluebird');

const { databaseURI } = require('../config/environment');
mongoose.connect(databaseURI);


const Place = require('../models/place');
const User = require('../models/user');


Place.collection.drop();
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
    return Place
      .create([{
        photo: 'https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/france/paris/eiffel-tower-paris-p.jpg',
        name: 'Paris',
        location: '48.856614, 2.352222',
        datestart: 'Wed Mar 25 2015 00:00:00 GMT+0000',
        dateend: 'Wed Mar 25 2015 00:00:00 GMT+0000',
        rating: 4,
        notes: "Paris, je t'aime! <3 <3 <3",
        user: users[0],
        comments: [{
          time: 'Mon, Jan 07 2018 21:09:09 GMT',
          content: 'It was the best of times, it was the worst of times...',
          commenter: users[1]
        }, {
          time: 'Sat, Dec 25 2017 21:09:09 GMT',
          content: 'Wuthering wuthering heights!',
          commenter: users[2]
        }]
      },{
        photo: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg',
        name: 'New York City',
        location: '40.712775, -74.005973',
        datestart: 'Wed Mar 25 2015 00:00:00 GMT+0000',
        dateend: 'Wed Mar 25 2015 00:00:00 GMT+0000',
        rating: 4,
        notes: 'They love me there.',
        user: users[1],
        comments: [{
          time: 'Sat, Dec 25 2017 21:09:09 GMT',
          content: 'Old York is good enough for me!',
          commenter: users[0]
        }, {
          time: 'Sat, Dec 25 2017 21:09:09 GMT',
          content: 'Wuthering wuthering wuthering heights!',
          commenter: users[2]
        }]
      },{
        photo: 'https://cdn.britannica.com/700x450/17/83817-004-C5DB59F8.jpg',
        name: 'Mount Everest',
        location: '27.988121, 86.924975',
        datestart: 'Wed Mar 25 2015 00:00:00 GMT+0000',
        dateend: 'Wed Mar 25 2015 00:00:00 GMT+0000',
        rating: 4,
        notes: 'Wuthering wuthering wuthering heights!',
        user: users[2],
        comments: [{
          time: 'Sat, Dec 25 2017 21:09:09 GMT',
          content: 'Looks cold!',
          commenter: users[0]
        },{
          time: 'Sat, Dec 25 2017 21:09:09 GMT',
          content: 'Lack of readers there.',
          commenter: users[1]
        }]
      }]);
  })
  .catch(err => console.log(err))
  .finally(()=> mongoose.connection.close());
