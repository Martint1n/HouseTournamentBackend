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

router.put('/updatepoints', function(req, res) {
  Artist.updateOne(
    { _id: req.body.id },    // Filtre pour trouver le document
    { $set: { points: req.body.points } }  // Opération de mise à jour avec $set
)
.then(result => {
  console.log(`${result.matchedCount} document(s) correspondant(s) trouvé(s).`);
  console.log(`${result.modifiedCount} document(s) mis à jour.`);
  res.status(200).send({ message: 'Update successful' });

})
.catch(error => {
  console.error(error);
  res.status(500).send({ error: 'Update failed' });

});
})

module.exports = router;
