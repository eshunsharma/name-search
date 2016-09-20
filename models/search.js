var searchDB = require('../db/search.js');

module.exports = {
	searchData : function(token, callback) {

		if(token.length < 3)
			callback({Code:0, Message: "Token Should be atleast 3 characters"});
		else {
			searchDB.searchData(token, function (data) {
				callback({Code:1, Data: data});
			});
		}


	}
};