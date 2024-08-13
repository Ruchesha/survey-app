const express = require('express');
const router = express.Router();
const { createSurvey } = require('../models/surveyModel');

// Handle form submission
router.post('/submit-survey', (req, res) => {
    const { name, email, feedback } = req.body;
    createSurvey(name, email, feedback, (err, result) => {
        if (err) throw err;
        res.send('Survey submitted successfully!');
    });
});

module.exports = router;

