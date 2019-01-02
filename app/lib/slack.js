const SlackApi = require('slack')

class Slack {
  static sendMessage(userSlackId, message) {
    SlackApi.chat.postMessage({
      token: process.env.SLACK_BOT_TOKEN,
      channel: userSlackId,
      text: message
    })
  }

  static listUsers() {
    return SlackApi.users.list({token: process.env.SLACK_BOT_TOKEN, scope: 'bot'})
  }

  static getUser(userSlackId) {
    return SlackApi.users.info({token: process.env.SLACK_BOT_TOKEN, user: userSlackId})
  }
}

module.exports = Slack;
