const mongoose = require('mongoose');
const Slack = require('../lib/slack');
const Schema = mongoose.Schema;

const GratitudeMessageSchema = new Schema({
  sender: String,
  senderPhoto: String,
  receiver: String,
  receiverPhoto: String,
  message: String,
  created_at: Date
});

GratitudeMessageSchema.statics.buildGratitudeMessage = async (data) => {
  const receiverUserId = data["text"].match(/(?<=<@).*?(?=\|)/g)[0]
  const senderUserId = data["user_id"]

  const asyncSender = Slack.getUser(senderUserId)
  const asyncReceiver = Slack.getUser(receiverUserId)

  const [sender, receiver] = await Promise.all([asyncSender, asyncReceiver])

  return {
    sender: sender['user']['real_name'],
    senderPhoto: sender['user']['profile']['image_512'],
    receiver: receiver['user']['real_name'],
    receiverPhoto: receiver['user']['profile']['image_512'],
    message: data['text'].replace(/(<@).*?(>)/, receiver['user']['real_name']),
    created_at: Date.now()
  }
}

GratitudeMessageSchema.statics.notifyGratefulUsers = async () => {
  console.log('Sending gratitude reminder to all the slack users');
  const users = await Slack.listUsers();
  const gratitudeReminder = 'Olá, você já agradeçeu alguém essa semana? Digite `/namastop`, o agradecimento e a @pessoa *tudo em 140 caracteres* que eu cuido do resto :smile:';
  users['members'].map((user) => Slack.sendMessage(user['id'], gratitudeReminder));
}

module.exports = mongoose.model('GratitudeMessage', GratitudeMessageSchema)
