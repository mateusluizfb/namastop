const React = require('react');
const Imports = require('./imports');

class CardsTable extends React.Component {

  gratitudeCards() {
    return this.props.gratitudeMessages.map((message) => this.gratitudeCard(message));
  }

  gratitudeCard(gratitudeMessage) {
    const receiverFirstName = gratitudeMessage.receiver.substr(0,gratitudeMessage.receiver.indexOf(' '));;
    const senderFirstName = gratitudeMessage.receiver.substr(0,gratitudeMessage.receiver.indexOf(' '));;
    const receiverPhoto = gratitudeMessage.receiverPhoto || "/images/default.png"

    return (
      <div className="col s12 m4">
        <div className="card horizontal">
          <div className="card-image">
            <img src={receiverPhoto}/>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <h5>{receiverFirstName}</h5>

              <p>
                {gratitudeMessage.message} - {senderFirstName}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.gratitudeCards()}
      </div>
    );
  }
}

module.exports = CardsTable;
