const React = require('react');
const Imports = require('./imports');
const CardsTable = require('./cards_table');

class Home extends React.Component {
  render() {
    return (
      <div>
        <Imports/>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">Namastop</a>
          </div>
        </nav>

        <div className="container" style={{'marginTop': '1.0em'}}>
          <div className="row">
            <CardsTable gratitudeMessages={this.props.gratitudeMessages} />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Home;
