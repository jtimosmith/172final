var router = require('express').Router();
var post = require('./postModel');

var posts = [];
var id = 0;

// setup boilerplate route jsut to satisfy a request
// for building


router.route('/')
  .get(function(req, res){
    console.log('Hey from post!!');
    res.send({ok: true});
  })	
  
  .get('/posts/:id', function(req, res){
	var post = _.find(posts, {id: req.params.
  })

  .post(function(req, res){
	var user = req.body;
	id += 1;
  	post.id = id + ' ';
	post.push(post);
});


router.route('/:post_id')
  .get(function(req, res){
	res.json(req.post || {});
  })

  .put(functionreq, res){
	post.find('_id': req.post_id}, function(err){
		if(err){
			throw err;
		}
	post.title = req.body.title;
	post.text = req.body.text;
	post.author = req.body.author;
	post.address = req.body.address;
	post.categories = req.body.categories;
  })
});

module.exports = router;
