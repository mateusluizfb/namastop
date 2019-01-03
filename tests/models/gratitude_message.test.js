const mongoose = require('mongoose');
const GratitudeMessage = require('../../app/models/gratitude_message');
let Slack = require('../../app/lib/slack');

describe('GratitudeMessage', () => {
  describe('will have instance with the correct attributes', () => {
    let gratitude_message = new GratitudeMessage({
      sender: 'João',
      senderPhoto: 'www.photos.com/João.png',
      receiver: 'Mateus',
      receiverPhoto: 'www.photos.com/Mateus.png',
      message: 'Isso é uma mensagem de gratidão'
    });

    it('', () => expect(gratitude_message.sender).toEqual('João'));
    it('', () => expect(gratitude_message.senderPhoto).toEqual('www.photos.com/João.png'));
    it('', () => expect(gratitude_message.receiver).toEqual('Mateus'));
    it('', () => expect(gratitude_message.receiverPhoto).toEqual('www.photos.com/Mateus.png'));
    it('', () => expect(gratitude_message.message).toEqual('Isso é uma mensagem de gratidão'));
  });

  describe('buildGratitudeMessage', () => {
    let data = {
      "token":"hyEA1T9qDQlqzIWaKgI0nFkf",
      "team_id":"TF46JD2F3",
      "team_domain":"gratidao-cia",
      "channel_id":"DF4QA6MJN",
      "channel_name":"directmessage",
      "user_id":"UF46JD2L9",
      "user_name":"mateuslfreitasb",
      "command":"/namastop",
      "text":"um agradecimento para <@UF42TNARE|mateus>",
      "response_url": "https://hooks.slack.com/commands/TF46JD2F3/514963790019/EQx7ljYBrZfl0YJTKZQHwMrO",
      "trigger_id":"514900435844.514222444513.c448466940d5620dcb45c5b11fc2d3d9"
    };

    beforeAll(() => {
      let joaoData = {
        user: {
          real_name: 'João',
          profile: {
            image_512: 'www.photos.com/João.png'
          }
        }
      };

      let mateusData = {
        user: {
          real_name: 'Mateus',
          profile: {
            image_512: 'www.photos.com/Mateus.png'
          }
        }
      };


      let getUserFn = jest.fn();
      getUserFn.mockReturnValueOnce(joaoData).mockReturnValueOnce(mateusData);
      Slack.getUser = getUserFn;
    })

    it('will return the GratitudeMessage data', () => {
      let gratitudeMessageData = GratitudeMessage.buildGratitudeMessage(data)

      return gratitudeMessageData
        .then((data) => {
          expect(data).toEqual({
            sender: 'João',
            senderPhoto: 'www.photos.com/João.png',
            receiver: 'Mateus',
            receiverPhoto: 'www.photos.com/Mateus.png',
            message: 'um agradecimento para Mateus'
          });
        });
    });
  });

  describe('notifyGratefulUsers', () => {
    const usersResponse = {
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
        },
        {
          id: 'UF42TNARE',
          team_id: 'TF46JD2F3',
          name: 'mateus',
          deleted: false,
          color: 'e7392d',
          real_name: 'mateus bxblue',
          tz: 'America/Sao_Paulo',
          tz_label: 'Brasilia Summer Time',
          tz_offset: -7200,
          profile: [Object],
          is_admin: false,
          is_owner: false,
          is_primary_owner: false,
          is_restricted: false,
          is_ultra_restricted: false,
          is_bot: false,
          is_app_user: false,
          updated: 1546462605,
          has_2fa: false
        },
        {
          id: 'UF46JD2L9',
          team_id: 'TF46JD2F3',
          name: 'mateuslfreitasb',
          deleted: false,
          color: '9f69e7',
          real_name: 'mateuslfreitasb',
          tz: 'America/Sao_Paulo',
          tz_label: 'Brasilia Summer Time',
          tz_offset: -7200,
          profile: [Object],
          is_admin: true,
          is_owner: true,
          is_primary_owner: true,
          is_restricted: false,
          is_ultra_restricted: false,
          is_bot: false,
          is_app_user: false,
          updated: 1546462573,
          has_2fa: false
        },
        {
          id: 'UF4MDA9AP',
          team_id: 'TF46JD2F3',
          name: 'mateuslfb',
          deleted: false,
          color: '4bbe2e',
          real_name: 'mateus microsoft',
          tz: 'America/Sao_Paulo',
          tz_label: 'Brasilia Summer Time',
          tz_offset: -7200,
          profile: [Object],
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
      ],
      cache_ts: 1546517882,
      response_metadata: { next_cursor: '' }
    };
    const mockedSendMessage = jest.fn();


    describe('will send a reminder about the gratitude message', () => {
      beforeAll(() => {
        Slack.listUsers = () => (usersResponse);
        Slack.sendMessage = mockedSendMessage;
      });

      const gratitudeReminder = 'Olá, você já agradeçeu alguém essa semana? Digite `/namastop`, o agradecimento e a @pessoa que eu cuido do resto :smile:'

      it('', async () => {
        await GratitudeMessage.notifyGratefulUsers();
        expect(mockedSendMessage).toHaveBeenNthCalledWith(1, 'USLACKBOT', gratitudeReminder);
      });
      it('', async () => {
        await GratitudeMessage.notifyGratefulUsers();
        expect(mockedSendMessage).toHaveBeenNthCalledWith(2, 'UF42TNARE', gratitudeReminder);
      });
      it('', async () => {
        await GratitudeMessage.notifyGratefulUsers();
        expect(mockedSendMessage).toHaveBeenNthCalledWith(3, 'UF46JD2L9', gratitudeReminder);
      });
      it('', async () => {
        await GratitudeMessage.notifyGratefulUsers();
        expect(mockedSendMessage).toHaveBeenNthCalledWith(4, 'UF4MDA9AP', gratitudeReminder);
      });
    });
  })
});
