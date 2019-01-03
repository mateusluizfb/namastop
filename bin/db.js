const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect(process.env.MONGO_HOST);
  mongoose.Promise = global.Promise;
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}
