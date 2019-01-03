const React = require('react');
const enzyme = require('enzyme');
const Card = require('../../app/views/card');

describe('Card', () => {
  const wrapper = enzyme.shallow(
    <Card
      receiver='João Pedro'
      sender='Mateus Luiz'
      receiverPhoto='www.photos.com/Joao.png'
      message='mandou bem João'
    />
  );

  describe('has all the props', () => {
    it('', () => expect(wrapper.instance().props.receiver).toEqual('João Pedro'));
    it('', () => expect(wrapper.instance().props.sender).toEqual('Mateus Luiz'));
    it('', () => expect(wrapper.instance().props.receiverPhoto).toEqual('www.photos.com/Joao.png'));
    it('', () => expect(wrapper.instance().props.message).toEqual('mandou bem João'));
  });

});
