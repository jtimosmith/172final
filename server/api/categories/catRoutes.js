var router = require('express').Router();

var categories = [];
var id = 0;

router.route('/')
  .get(function(req, res){
  res.send({ok: true});
});

module.exports = router;

