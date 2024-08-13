const dbConnection = require('../config/db');

const createSurvey = (name, email, feedback, callback) => {
    const query = 'INSERT INTO surveys (name, email, feedback) VALUES (?, ?, ?)';
    dbConnection.query(query, [name, email, feedback], callback);
};

module.exports = { createSurvey };

