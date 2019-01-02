const mongoose = require('mongoose');
const GratitudeMessage = require('../../app/models/gratitude_message');

describe('GratitudeMessage', () => {
  describe('will have instance with the correct attributes', () => {
    let gratitude_message = new GratitudeMessage({
      sender: 'João',
      sender_photo: 'www.photos.com/João.png',
      receiver: 'Mateus',
      receiver_photo: 'www.photos.com/Mateus.png',
      message: 'Isso é uma mensagem de gratidão'
    });

    it('', () => expect(gratitude_message.sender).toEqual('João'));
    it('', () => expect(gratitude_message.sender_photo).toEqual('www.photos.com/João.png'));
    it('', () => expect(gratitude_message.receiver).toEqual('Mateus'));
    it('', () => expect(gratitude_message.receiver_photo).toEqual('www.photos.com/Mateus.png'));
    it('', () => expect(gratitude_message.message).toEqual('Isso é uma mensagem de gratidão'));
  });

});
