const SlackApi = require('slack')

class Slack {
  constructor() {
    this.token = process.env.SLACK_BOT_TOKEN;
  }

  sendMessage(userSlackId, message) {
    SlackApi.chat.postMessage({
      token: this.token,
      channel: userSlackId,
      text: message
    })
  }

  listUsers() {
    return SlackApi.users.list({token: this.token, scope: 'bot'})
  }

  getUser(userSlackId) {
    return SlackApi.users.info({token: this.token, user: userSlackId})
  }
}

module.exports = Slack;
