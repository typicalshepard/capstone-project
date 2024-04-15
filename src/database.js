const mysql = require('mysql');
const config = require('./.vscode/mysql_config.json');

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL server:', err);
    return;
  }
  console.log('Connected to MySQL server');
});

// Perform database operations here

connection.end();
