const SlackController = require('../../app/controllers/slack_controller');
const app = require('../../app.js');
const request = require('supertest');

describe('SlackController', () => {

  describe('POST receive-user-message', () => {
    it('will respond 200 OK' , () => {
      return request(app).post('/slack/receive-user-message', {}).then((response) => {
        expect(response.statusCode).toBe(200)
      });
    });
  });

})
