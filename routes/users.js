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

router.put('/updatepoints', function(req,res) {
  Artist.updateOne(
    { _id: req.body.id },    // Filtre pour trouver le document
    { $set: { points: req.body.points } }  // Opération de mise à jour avec $set
)
})

module.exports = router;
