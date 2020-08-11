var mysql = require('mysql');
var CONFIG = require('./config');

var connection = mysql.createConnection({
	host     : CONFIG.MYSQL_DB_HOST,
	user     : CONFIG.MYSQL_DB_USER,
	password : CONFIG.MYSQL_USER_PASSWORD,
	database : CONFIG.MYSQL_DB_NAME
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
});

module.exports = connection;