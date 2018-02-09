var fs 	 = require('fs');
var url	 = require('url');
var express = require('express');
var app = express();
var colors = require('colors');
var path 	= require('path');
var serveStatic = require('serve-static');
var router = express.Router();
var bodyparser = require('body-parser');
var mongo = require('mongoskin');
var MongoClient = require('mongodb').MongoClient;
var mongourl = 'mongodb://localhost:27017';

// creating socket for server
var server = require('http').createServer(app);
var io = require('socket.io')(server);
// var socket = io.connect('//localhost:5555', {reconnect: true});

app.use(express.static('public'));

// app.use(bodyparser.urlencoded({extended:true}))

	io.on('connection',function(){
		console.log('User is connected and socket.io listening'.green);
		
		connectToDB(function (err,res){
			if(err){
				console.log('error connecting to db');
				return;
			}
			if(res){
				console.log('connected to abhiDB');
			}
		});

		io.on('disconnect',function(){
			console.log('User disconnected');
		})

		io.on("PROFILE_DATA",saveProfileInfo);

	});

	app.get('/', function(req, res) {
    res.sendFile(__dirname +"/index.html");
	});

	function connectToDB(cb){
		MongoClient.connect(mongourl,function(err,dbCon){
			if(err){
				throw err;
				return;
			}
			db=dbCon.db('abhiDB');
			cb(null,true);
		});
	};

	function saveProfileInfo(data){
		db.collection('abhi').save(data, function(err,res){
			if(err){
				return;
				console.log(err);
			}
			console.log('saved to db');
		});
	};

server.listen(5555,function (){
	console.log("server Started".green);
})