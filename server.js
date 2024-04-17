const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const indexRoutes = require('./routes/index');
const port = 3000;

app.use(express.static('public'));

app.use('/', indexRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
