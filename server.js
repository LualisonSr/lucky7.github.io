const express = require('express');
const passport = require('passport');
const app = express();
const path = require('path');
const indexRoutes = require('./public/routes/index');
const port = 3000;

// Set up the view engine and static files directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Use routes defined in index.js
app.use('/', indexRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// app.use(passport.initialize());
// app.use(passport.session());


