const Slack = require('../../app/lib/slack');
const SlackApi = require('slack');
process.env.SLACK_BOT_TOKEN = 'xxxx-xxxx';

describe('Slack', () => {
  const classInstance = new Slack;

  describe('sendMessage', () => {
    it('will return true', () => {
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
    let response = {
      ok: true,
      members: [
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
    }

    it('will return the users list', () => {
      SlackApi.users.list = jest.fn(() => Promise.resolve(response))
      expect(classInstance.listUsers()).resolves.toEqual(response);
    })
  });

  describe('getUser' , () => {
    let response = {
    ok: true,
    user: {
      id: 'UF4MDA9AP',
      team_id: 'TF46JD2F3',
      name: 'mateuslfb',
      deleted: false,
      color: '4bbe2e',
      real_name: 'mateus microsoft',
      tz: 'America/Sao_Paulo',
      tz_label: 'Brasilia Summer Time',
      tz_offset: -7200,
      profile: {
        title: '',
        phone: '',
        skype: '',
        real_name: 'mateus microsoft',
        real_name_normalized: 'mateus microsoft',
        display_name: '',
        display_name_normalized: '',
        status_text: '',
        status_emoji: '',
        status_expiration: 0,
        avatar_hash: 'ge401dde9223',
        image_24: 'https://secure.gravatar.com/avatar/e401dde92230f50ba9453d4c12f789e9.jpg?s=24&d=https%3A%2F%2Fa.slack-edge.com%2F66f9%2Fimg%2Favatars%2Fava_0010-24.png',
        image_32: 'https://secure.gravatar.com/avatar/e401dde92230f50ba9453d4c12f789e9.jpg?s=32&d=https%3A%2F%2Fa.slack-edge.com%2F66f9%2Fimg%2Favatars%2Fava_0010-32.png',
        image_48: 'https://secure.gravatar.com/avatar/e401dde92230f50ba9453d4c12f789e9.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2F66f9%2Fimg%2Favatars%2Fava_0010-48.png',
        image_72: 'https://secure.gravatar.com/avatar/e401dde92230f50ba9453d4c12f789e9.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F66f9%2Fimg%2Favatars%2Fava_0010-72.png',
        image_192: 'https://secure.gravatar.com/avatar/e401dde92230f50ba9453d4c12f789e9.jpg?s=192&d=https%3A%2F%2Fa.slack-edge.com%2F7fa9%2Fimg%2Favatars%2Fava_0010-192.png',
        image_512: 'https://secure.gravatar.com/avatar/e401dde92230f50ba9453d4c12f789e9.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2F7fa9%2Fimg%2Favatars%2Fava_0010-512.png',
        status_text_canonical: '',
        team: 'TF46JD2F3'
      },
      is_admin: false,
      is_owner: false,
      is_primary_owner: false,
      is_restricted: false,
      is_ultra_restricted: false,
      is_bot: false,
      is_app_user: false,
      updated: 1546432498,
      has_2fa: false
     }
    }

    it('will return the user data', () => {
     SlackApi.users.list = jest.fn(() => Promise.resolve(response))
     expect(classInstance.listUsers()).resolves.toEqual(response);
    });
  })
})
