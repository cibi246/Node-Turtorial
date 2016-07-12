var express = require('express');
var app = express();
var fs = require('fs');
const bodyParser = require('body-parser'); 
var id=2;
var user = {
	user4:{
		"name": "ManiCibi",
		"password": "password",
		"profession": "Software Engineer",
		"id": 10931227
	}
}

app.get('/deleteUser',function(req,res){
	fs.readFile(__dirname+"/"+"users.json","utf8",function(err,data){
		data = JSON.parse(data);
		delete data["user"+id];
		console.log(data);
		res.end(JSON.stringify(data));
	})
})
app.get('/',function(req,res){
	res.sendFile(__dirname+"/"+'index.html')
})
app.use(bodyParser.urlencoded({extended:true}));

//list Users
app.get('/listUsers',function(req,res){
	fs.readFile(__dirname+"/"+"users.json","utf8",function(err,data){
		console.log(data);
		res.end(data);
	})
})

//Add a user
app.get('/addUser',function(req,res){
	fs.readFile(__dirname+"/"+"users.json",function(err,data){
		data = JSON.parse(data);
		data["user4"] = user["user4"];
		console.log(data);
		res.end(JSON.stringify(data))
	})
})

//getUser
app.get('/getUser',function(req,res){
	fs.readFile(__dirname+"/"+"users.json",function(err,data){
		users = JSON.parse(data);
		var user = users["user"+1];
		console.log(user);
		res.end(JSON.stringify(user));
	})
})
var server = app.listen(8081,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('App is listening to http://%s:%s', host,port);
})