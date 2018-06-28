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

In the end, I used a rather hacky method: getting the data on the frontend and setting it as the values of hidden fields on a form, which then submits the data to the backend. In this way, I get the place name, coordinates and, originally, a photo of the place (see 'Room for improvement' section for developments on this). The user can also add their own rating (between 1 and 5 stars), dates visited, as well as a note.


![Show Page](http://stephslye.github.io/images/helloworldshowpage.png)

----------------------
##Room for improvement
----------------------

* In general, my hacky way of passing data from the frontend to the backend is probably not the most elegant way.

* Google Maps API matters: though I am able to automatically obtain an image of an entered place through the API, after a few days the URL becomes invalid and returns an ugly placeholder image. I am unsure if there is a way to circumvent this, or if I simply have to accept it as one of the API's quirks. At the moment, I have commented out the mechanism to fetch an image via the API, instead providing a default image of the globe. The user can replace the default image with their own image url if they edit the entry.

* Data presentation matters: all place entries are currently sorted alphabetically according to place name. A future task would be to create the functionality to sort the entries by country and continent, as well as to introduce stats as to the number of places/countries/continents visited.

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
