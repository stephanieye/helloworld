const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const flash = require('express-flash');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const morgan = require('morgan');
const session = require('express-session');


const customresponses = require('./lib/customresponses');
const authentication = require('./lib/authentication');
const routes = require('./config/routes');
const {port, databaseURI} = require('./config/environment');

mongoose.connect(databaseURI);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(morgan('dev'));
app.use(expressLayouts);
app.use(flash());
app.use(customresponses);

app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride(req => {
  if(req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(session({
  secret: 'moriarty',
  resave: false,
  saveUninitialized: false
}));


// app.use((err, req, res, next) => {
//   err.status = err.status || 500;
//   err.message = err.message || 'Internal Server Error';
//   res.status = err.status;
//   res.locals.err = err;
//   return res.render(`statistics/${err.status}`);
// });
//
// app.use((err, req, res) => {
//   err.status = err.status || 400;
//   err.message = err.message || 'Input Error';
//   res.status(err.status);
//   res.locals.err = err;
//   return res.render(`statistics/${err.status}`);
// });

app.use(express.static(__dirname + '/public'));

app.use(authentication);
app.use(routes);

app.listen(port, () => console.log(`Running on port${port}`));
