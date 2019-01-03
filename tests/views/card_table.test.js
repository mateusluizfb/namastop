const React = require('react');
const enzyme = require('enzyme');
const CardsTable = require('../../app/views/cards_table');

describe('Card', () => {
  let gratitudeMessages = [
    {
      _id: 'abcd12345',
      receiver: 'Joao',
      sender: 'Marcos',
      receiverPhoto: 'www.photos.com/Joao.png',
      senderPhoto: 'www.photos.com/Marcus.png',
      message: 'Uma gratidão para o João'
    },
    {
      _id: 'abcd56789',
      receiver: 'Marcos',
      sender: 'Mateus',
      receiverPhoto: 'www.photos.com/Marcos.png',
      senderPhoto: 'www.photos.com/Mateus.png',
      message: 'Uma gratidão para o Marcos'
    }
  ]

  const wrapper = enzyme.shallow(<CardsTable gratitudeMessages={gratitudeMessages} />);
  it('will render the two gratitude messages cards', () => expect(wrapper.find('Card').length).toEqual(2));

});
