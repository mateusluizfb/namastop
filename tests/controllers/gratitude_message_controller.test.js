const GratitudeMessageController = require('../../app/controllers/gratitude_message_controller');
const app = require('../../app.js');
const request = require('supertest');

describe('GratitudeMessageController', () => {

  describe('POST receive-user-message', () => {
    it('will respond 200 OK' , () => {
      return request(app).post('/gratitude-message/receive-slack-message', {}).then((response) => {
        expect(response.statusCode).toBe(200)
      });
    });

    it('will create a gratitude message', () => {
      return request(app).post('/slack/receive-user-message', {}).then((response) => {
        // TODO
      });
    })
  });

})
