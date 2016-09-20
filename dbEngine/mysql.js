var mysql = require('mysql');
var config = require('../config/config.json');

module.exports = {

	Query: function (query, callback) {

		// Connection Settings are saved in config file
		var connection = mysql.createConnection(config.Application.MySql);

		// If connection fails, send error message else log thread id
		connection.connect(function(err) {
		  	if (err) {
		    	console.error('error connecting: ' + err.stack);
		    	return;
		 	}
		  	console.log('connected as id ' + connection.threadId);
		});

		// Query that is to be executed (Stored in query variable)
		connection.query(query, function(err, rows, fields) {
		  	if (err)  
		  		console.log(err.stack);
		  	else
		  		callback(rows);
		});

		// End the connection after the query has been completed
		connection.end();           
	}

}