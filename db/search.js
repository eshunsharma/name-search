var mysql = require('mysql');
var Sql = require('../dbEngine/mysql.js');

module.exports={
	searchData : function(token, callback) {
		
		Sql.Query("SELECT CONCAT(firstname, ' ', lastname) as fullname FROM users WHERE firstname LIKE '%"+token+"%' or lastname LIKE '%"+token+"%' LIMIT 5", function(data) {
			callback(data);
		});

	}
};