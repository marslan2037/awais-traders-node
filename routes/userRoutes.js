const express = require("express");
const router = express.Router();
var connection = require("../mysqlConnection");
var moment = require("moment");

//LOGIN API
router.post("/signin", function (req, res) {
	console.log('doing signin')
	var email = req.body.email;
	var password = req.body.password;
	var sqlQuery = "SELECT * FROM users where users.email='" +req.body.email+"' and users.password='"+req.body.password+"'";

	connection.query(sqlQuery, function (error, results) {
	    if (error) {
	    	var responseData = {
		        status: "Failed",
		        loginStatus: false,
		        message: error,
	      	};
	      	res.status(400).send(responseData);
	    } else {
	      	if (results && results.length > 0) {
	        	var responseData = {
			        status: "Success",
			        loginStatus: true,
			        message: "Successfully Loggedin",
			        user: results,
	        	};
		        res.send(responseData);
	      	} else {
	        	var responseData = {
	          		status: "Failed",
	          		loginStatus: false,
	          		message: "Incorrect Username or Password",
	          		user: results,
	        	};
	        	res.send(responseData);
	      	}
	    }
	});
});

module.exports = router;