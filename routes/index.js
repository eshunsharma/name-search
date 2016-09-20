const express = require('express');
const router = express.Router();


/* Models */

const addModel = require('../model/add.js')
const searchModel = require('../model/search.js')

/* Add data in MySql Data base. */
router.get('/add', function(req, res, next) {
  	addModel.addData(function(data){
  		if (data == 1)
  			res.send({Code:1, Message: "Successfully Inserted in database."});
  		else
  			res.send({Code:1, Message: "Successfully Insertion Failed."});
  	});
});

/* Add data in MySql Data base. */
router.get('/search', function(req, res, next) {

	token = req.body.token;

  	searchModel.searchData(token, function(data){
  		res.send(data);
  	});

});

module.exports = router;
