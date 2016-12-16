var router = require('express').Router();

// setup boilerplate route jsut to satisfy a request
// for building

//route() will allow you to use same path for different HTTP operation.
//So if you have same URL but with different HTTP OP such as POST,GET etc
//Then use route() to remove redundant code.

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:8080', (err, db){
	if(err){
		return console.log('Error occurred');
	}
	else{
		console.log('Connection successful');
	}
	db.close();
	});

router.route('/')
  .get(function(req, res){
    console.log('Hey from user!!');
    res.status(500).send({ok: true});	
});


router.use(function(err, req, res, next){
	if(res.errorsSent){
		return next(err);
	}
	res.status(500).send({error: err});
}

module.exports = router;
