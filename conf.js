const mysql = require('mysql');
const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'TU NAURA PAS MON MOT DE PASSE',
database: 'Wilders'
});
module.exports = connection;
