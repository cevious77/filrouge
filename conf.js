const mysql = require('mysql');
const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'airgear77',
database: 'Wilders'
});
module.exports = connection;
