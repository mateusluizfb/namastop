const React = require('react');

class Card extends React.Component {

  firstName(fullName) {
    return fullName.substr(0,fullName.indexOf(' ')) || fullName;
  }

  render() {
    const receiverFirstName = this.firstName(this.props.receiver);
    const senderFirstName = this.firstName(this.props.sender);
    const receiverPhoto = this.props.receiverPhoto || "/images/default.png"

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
                {this.props.message} - {senderFirstName}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Card;
