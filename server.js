var http = require('http');
var fs 	 = require('fs');
var url	 = require('url');
var express = require('express');
var app = express();
var colors = require('colors');
var path 	= require('path');
var serveStatic = require('serve-static');
var router = express.Router();
var bodyparser = require('body-parser');

http.createServer(function(req,res){

	app.use(serveStatic(path.join(__dirname, 'public')));
	app.use(bodyparser.urlencoded({extended:true}))

	var q= url.parse(req.url, true);
	var filename = "."+q.pathname;

	fs.readFile(filename, function(err,result){
		if(err){
			res.writeHead(404);
			return res.end("404 Not Found");
		}
		res.writeHead(200);
		res.write(result);
		return res.end();
	});

	app.post('/profile',function(req,res){
		console.log(req.body);
	})
	// app.post('/profile', function(req,res){
	// 	console.log('Hello')
	// })


	// app.get('/',function(req,res){
	// 	res.sendFile('__dirname'+'/ProjectOne.html');
	// })

}).listen(4444);
console.log("server started".green);