const Slack = require('../../app/lib/slack');
const SlackApi = require('slack')
process.env.SLACK_BOT_TOKEN = 'xxxx-xxxx';

describe('Slack', () => {
  const classInstance = new Slack;

  describe('sendMessage', () => {
    test('will return true', () => {
      const mockedFunction = jest.fn();
      SlackApi.chat.postMessage = mockedFunction;

      const userSlackId = 'U123456w';
      const message = 'Mensagem teste';

      classInstance.sendMessage(userSlackId, message)
      expect(mockedFunction).toHaveBeenCalledWith({
        token: 'xxxx-xxxx',
        channel: userSlackId,
        text: message
      });
    });
  });

  describe('listUsers', () => {
    let response = [
      {
        id: 'USLACKBOT',
        team_id: 'TF46JD2F3',
        name: 'slackbot',
        deleted: false,
        color: '757575',
        real_name: 'slackbot',
        tz: null,
        tz_label: 'Pacific Standard Time',
        tz_offset: -28800,
        profile: [Object],
        is_admin: false,
        is_owner: false,
        is_primary_owner: false,
        is_restricted: false,
        is_ultra_restricted: false,
        is_bot: false,
        is_app_user: false,
        updated: 0
      }
    ]

    test('will return the users list', () => {
      SlackApi.users.list = jest.fn(() => Promise.resolve(response))
      expect(classInstance.listUsers()).resolves.toEqual(response);
    })
  });
})
