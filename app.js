// Import modules
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

// Create new express instance
const app = express();

//EJS Setup
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Setup public folder for express static files
app.use(express.static('public'));

// Parse URL-encoded body
app.use(express.urlencoded( {extended: false }));

// Routes
app.use('/', require('./routes/index'));

// Set port to 5000 or ENV
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on ${PORT}`))

