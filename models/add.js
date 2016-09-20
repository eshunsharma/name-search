var addDB = require('../db/add.js');
var fs = require('fs');

module.exports = {
	addData : function(callback) {

		fs.readFile('data/firstnames.out', function (err, firstname) {
			if(err)
				callback(0);
			fs.readFile('data/lastnames.out', function (err, lastname) {
				if(err)
					callback(0);

				fname = firstname.toString().split('\n');
				lname = lastname.toString().split('\n');

				for(i=0;i<fname.length, i++) {
					batchData += batchData != ''? ',' : '';
					lname = lname || '';
					batchData += '(' i + ',' + fname + ',' + lname + ')'; 
				}

				addDB.addData(batchData, function (data) {
					callback(data);
				});

			}
		}


	}
};