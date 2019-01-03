const React = require('react');
const enzyme = require('enzyme');
const Home = require('../../app/views/home');

describe('Card', () => {
  let gratitudeMessages = [
    {
      _id: 'abcd12345',
      receiver: 'Joao',
      sender: 'Marcos',
      receiverPhoto: 'www.photos.com/Joao.png',
      senderPhoto: 'www.photos.com/Marcus.png',
      message: 'Uma gratidão para o João'
    }
  ]

  const wrapper = enzyme.shallow(<Home gratitudeMessages={gratitudeMessages} />);

  it('will render the Imports component', () => expect(wrapper.find('Imports').length).toEqual(1));
  it('will render the cards table', () => expect(wrapper.find('CardsTable').length).toEqual(1));
});
