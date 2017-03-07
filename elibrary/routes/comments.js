var express = require('express');
var router = express.Router();
var UserSchema=require('../models/user.js');
var CommentSchema=require('../models/comments.js');
var adminL=require('../models/upload.js');
/* GET home page. */


function callBack(allComments,i,req,res){
	
	if(i<allComments.length){
	 		UserSchema.findOne({},function(err,user){
	 			allComments[i].user = user;
	 			callBack(allComments,i+1,req,res);
	 		})
	 	}else{
			res.render('comments',{'req':req,'book':allComments});
	 	}
}
router.get('/', function(req, res, next) {

	 adminL.find({}, function (err, allBooks) {
		console.log(allBooks);
		callBack(allBooks,0,req,res);
	 });
  
});

router.put('/', function(req, res, next) {

    
	 adminL.find({authorname: req.body.authorname}, function (err, book) {
         if(err) throw err;
     
         res.json(book);
        
       
	 });
  
});

router.copy('/', function(req, res, next) {

    
	 adminL.find({category: req.body.category}, function (err, book) {
         if(err) throw err;
     
         res.json(book);
        
       
	 });
  
});

router.post('/',function(req,res,next){
		 adminL.find({bookname: req.body.bookname}, function (err, book) {
         if(err) throw err;
     
         res.json(book);
        
   
		
	 });
});

router.get('/upvote',function(req,res,next){
	id = req.query.id
	CommentSchema.findOne({_id:id},function(err,comment){
		userid = req.user._id
		if(comment.upvote.indexOf(userid)>-1){
			res.redirect('/comments');
		}else{
			dId = comment.downvote.indexOf(userid);
			if(dId>-1){
				comment.downvote.splice(dId,1);
			}
			comment.upvote.push(userid)
			comment.save(function(err){
				if(!err){
					res.redirect('/comments');
				}else{
					throw err;
				}
			})
		}
	})
})

router.get('/downvote',function(req,res,next){
	id = req.query.id
	CommentSchema.findOne({_id:id},function(err,comment){
		userid = req.user._id
		if(comment.downvote.indexOf(userid)>-1){
			res.redirect('/comments');
		}else{
			dId = comment.upvote.indexOf(userid)
			if(dId>-1){
				comment.upvote.splice(dId,1);
			}
			comment.downvote.push(userid)
			comment.save(function(err){
				if(!err){
					res.redirect('/comments');
				}else{
					throw err;
				}
			})
		}
	})
})



router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
