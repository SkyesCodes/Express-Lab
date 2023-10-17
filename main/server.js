// Load express
const express = require('express');

// Create our express app
const app = express();

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});
// Mount routes
app.get('/', function(req, res) {
    res.redirect('/home');
  });
  app.get('/home', function(req, res) {
    res.render('home');
  });
  app.set('view engine', 'ejs');
  app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
const express = require('express');
const path = require('path');
const path = require('path');

// require the To Do "database"
const objs = require('./data/objs');
const objs = require('../data/objs');
app.get('/objs', function(req, res) {
    res.render('objs/index', {
      objs: objs.getAll()
    });
  });