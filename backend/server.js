const express = require('express');
const path = require('path');
const surveyRoutes = require('./routes/surveyRoutes');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Use survey routes
app.use('/', surveyRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://50.17.8.225:${port}/`);
});

