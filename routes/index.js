var express = require('express');
var router 	= express.Router();
var mysql      = require('mysql');
var cnx = mysql.createConnection({
			  host     : 'services-tec.com',
			  user     : 'root',
			  password : 'S0p0rt3',
			  database : 'apirest'
			});
cnx.connect();

router.get('/', function(req, res, next) {
	cnx.query("Select * From usuarios",function(err,rows){
		res.send(rows);
	})
	cnx.end();
});

router.get('/insert', function(req, res, next) {
	var cod = req.query.cod;
	console.log(cod);
	cnx.query("Select * From usuarios where Codigo="+cod,function(err,rows){
		res.send(rows);
	})
	cnx.end();
});

module.exports = router;
