const GratitudeMessageController = require('../../app/controllers/gratitude_message_controller');
const GratitudeMessage = require('../../app/models/gratitude_message');
const app = require('../../app.js');
const request = require('supertest');
const mongoose = require('mongoose');

beforeAll(() => {
  mongoose.connect('mongodb://localhost:27017/gratitude_db_test');
});

afterEach(() => {
  return GratitudeMessage.deleteMany();
});

afterAll((done) => {
  mongoose.disconnect(done);
});

describe('GratitudeMessageController', () => {
  let requestFormData = {
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

  describe('POST receive-user-message', () => {
    it('will respond 200 OK' , () => {
      return request(app)
        .post('/gratitude-message/receive-slack-message')
        .type("json")
        .send(requestFormData)
        .then((response) => {
          expect(response.statusCode).toBe(200)
        });
    });

    xit('will create a gratitude message', () => {
      return request(app)
        .post('/gratitude-message/receive-slack-message', requestFormData)
        .then((response) => {
          GratitudeMessage.find({ sender: 'João' }, (err, gratitudeMessage) => {
          expect(gratitudeMessage).toEqual(null);
        });
      });
    })
  });
})
