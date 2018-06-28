![Title Page](http://stephslye.github.io/images/helloworld.png)

------------------
#Hello World!
------------------

* [View app on Heroku](https://helloworldmap.herokuapp.com/)
* [View repository on GitHub](https://github.com/stephslye/helloworld)

Full-stack app, 1-week individual project (with continuing updates)

An app that allows users to pin on a map where they've travelled (in the style of TripAdvisor's much-missed Cities I've Visited app). My RESTful API lets users add, view, edit and delete the places they've visited; add, view, edit and delete comments on other people's entries, as well as create, view, edit and delete their own profiles. I also used the Google Maps API to get the coordinates of all the places and display them on a map.

This was my first full-stack app created whilst on the Web Development Immersive course at General Assembly. The brief was to create a review website, i.e. a site on which users could add entries and comment on one another's entries. My original idea was to create a review website for London's parks. However, once I discovered the power of the Google Maps API, I realised I was limiting my horizons. Why not let my users review the whole world?

![Map Page](http://stephslye.github.io/images/helloworldmap.png)

----------
##Approach
----------

I wanted to make things easy for the user: they should simply have to type in a place name, hit 'submit', and the place should appear pinned on their map. Getting data about a place based on an entered place name was easy enough with Google Map's Autocomplete functionality; the API request returns a lot of data, including photographs of the place in question. However, the challenge was to get my backend working with the data coming from the Google Maps API on the frontend, using EJS.

![Add Place Page](http://stephslye.github.io/images/helloworldadd.png)

In the end, I used a rather hacky method: getting the data on the frontend and setting it as the values of hidden fields on a form, which then submits the data to the backend. In this way, I get the place name, coordinates, and a photo of the place. The user can also add their own rating (between 1 and 5 stars), dates visited, as well as a note.


![Show Page](http://stephslye.github.io/images/helloworldshowpage.png)

----------------------
##Room for improvement
----------------------

* In general, my hacky way of passing data from the frontend to the backend is probably not the most elegant way.

* As for non-hacky matters, all place entries are currently sorted alphabetically according to place name. A future task would be to create the functionality to sort the entries by country and continent, as well as to introduce stats as to the number of places/countries/continents visited.

--------------
##Technologies
--------------
Languages:
* HTML5
* SCSS
* JavaScript with EJS

CSS Framework:
* Materialize

Server Environment:
* Node.js

Web Application Framework:
* Express.js

Database:
* MongoDB with Mongoose

APIs:
* [Google Maps](https://developers.google.com/maps/documentation/)

Typefaces:
* [Google Fonts](http://fonts.google.com)

Text Editor:
* Atom

Browser:
* Chrome

---------
##Contact
---------

* hello@stephanieye.com
* http://stephanieye.com
