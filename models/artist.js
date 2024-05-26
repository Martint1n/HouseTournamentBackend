const mongoose = require('mongoose');

const artistSchema = mongoose.Schema({
 pseudo: String,
 carte: String,
 points: Number,
 urlInsta: String,
});

const Artist = mongoose.model('artists', artistSchema);

module.exports = Artist;