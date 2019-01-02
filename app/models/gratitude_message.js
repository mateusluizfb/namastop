const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GratitudeMessageSchema = new Schema({
  sender: String,
  sender_photo: String,
  receiver: String,
  receiver_photo: String,
  message: String
});

module.exports = mongoose.model('GratitudeMessage', GratitudeMessageSchema)
