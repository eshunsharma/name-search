var mysql = require('mysql');
var Sql = require('../dbEngine/mysql.js');

module.exports={
	addData : function(mode, callback) {
		
		Sql.Query('INSERT INTO signy VALUES '+ batch, function(data) {
			callback(1);
		});

	}
};