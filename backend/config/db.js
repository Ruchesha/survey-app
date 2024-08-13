const mysql = require('mysql2');
require('dotenv').config();

const dbConnection = () => {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.MYSQL_ROOT_PASSWORD || 'root', // Corrected variable usage
    database: process.env.DB_NAME || 'devops',
  });

  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database');
  });

  return connection;
};

module.exports = { dbConnection };

