const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://Martin:asdT65V74bybVrf6@cluster0.rdmsuvm.mongodb.net/tournoi_des_maisons';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))
  .catch(error => console.error(error));