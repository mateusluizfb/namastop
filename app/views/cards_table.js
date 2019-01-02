const React = require('react');
const Card = require('./card');

class CardsTable extends React.Component {

  gratitudeCards() {
    return this.props.gratitudeMessages.map((gratitudeMessage) => (
      <Card
        receiver={gratitudeMessage.receiver}
        sender={gratitudeMessage.sender}
        receiverPhoto={gratitudeMessage.receiverPhoto}
        message={gratitudeMessage.message}
      />
    ));
  }

  render() {
    return <div> {this.gratitudeCards()} </div>;
  }
}

module.exports = CardsTable;
