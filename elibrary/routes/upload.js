var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var adminL = require('../models/upload.js');
var UserSchema=require('../models/user.js');

var adminLogin = express.Router();

adminLogin.use(bodyParser.json());

function callBack(allBooks,i,req,res){
	console.log("here",allBooks);
	if(i<allBooks.length){
	 		UserSchema.findOne({},function(err,user){
	 			
	 			callBack(allBooks,i+1,req,res);
	 		})
	 	}else{
			res.render('upload',{'req':req,'book':allBooks});
	 	}
}

adminLogin.route('/')

.get(function(req,res,next){
		 adminL.find({}, function (err, allBooks) {
		console.log(allBooks);
		callBack(allBooks,0,req,res);
	 });
        
})

.put(function (req, res, next) {
    adminL.find({}, function (err, book) {
        if (err) throw err;
        res.json(book);
    });
})


.post(function(req, res, next){
    
    
    adminL.create(req.body, function(err, book){
        if(err) throw err;
        console.log('added');
        var id=book._id;
        var name = book.bookname;
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the book with id: ' + id + '   ' +name);
        
    });   
    
})


.delete(function (req, res, next) {
    adminL.remove({bookname:req.body.bname}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
         
    });
})





module.exports = adminLogin;