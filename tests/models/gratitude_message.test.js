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
    }

    beforeAll(() => {
      let joaoData = {
        user: {
          real_name: 'João',
          profile: {
            image_72: 'www.photos.com/João.png'
          }
        }
      }

      let mateusData = {
        user: {
          real_name: 'Mateus',
          profile: {
            image_72: 'www.photos.com/Mateus.png'
          }
        }
      }


      getUserFn = jest.fn();
      getUserFn.mockReturnValueOnce(joaoData).mockReturnValueOnce(mateusData)
      Slack.getUser = getUserFn;
    })

    it('will return the GratitudeMessage data', () => {
      let gratitudeMessageData = GratitudeMessage.buildGratitudeMessage(data)

      return gratitudeMessageData
        .then((data) => {
          expect(data).toEqual({
            sender: 'João',
            sender_photo: 'www.photos.com/João.png',
            receiver: 'Mateus',
            receiver_photo: 'www.photos.com/Mateus.png',
            message: 'um agradecimento para Mateus'
          })
        })
    });
  })
});
