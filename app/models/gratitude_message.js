const mongoose = require('mongoose');
const Slack = require('../lib/slack');
const Schema = mongoose.Schema;

const GratitudeMessageSchema = new Schema({
  sender: String,
  senderPhoto: String,
  receiver: String,
  receiverPhoto: String,
  message: String
});

GratitudeMessageSchema.statics.buildGratitudeMessage = (data) => {
  const receiverUserId = data["text"].match(/(?<=<@).*?(?=\|)/g)[0]
  const senderUserId = data["user_id"]

  const sender = Slack.getUser(senderUserId)
  const receiver = Slack.getUser(receiverUserId)

  return {
    sender: sender['user']['real_name'],
    sender_photo: sender['user']['profile']['image_72'],
    receiver: receiver['user']['real_name'],
    receiver_photo: receiver['user']['profile']['image_72'],
    message: data['text'].replace(/(<@).*?(>)/, receiver['user']['real_name'])
  }

}

module.exports = mongoose.model('GratitudeMessage', GratitudeMessageSchema)
