var express = require('express');
var router = express.Router();
const Artist = require('../models/artist')

/* GET users listing. */
router.get('/', function(req, res, next) {
  Artist.find()
  .then(data => {
    res.json({artist: data});
  });
  
});

module.exports = router;
