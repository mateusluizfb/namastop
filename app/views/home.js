const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Imports = require('./imports');
const CardsTable = require('./cards_table');
const Arrows = require('./arrows');

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="home">
        <Imports/>

        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">Namastop</a>
          </div>
        </nav>

        <div className="row">
          <div className="col m1">
          </div>
          <div className="col m10">
            <div className="container" style={{'marginTop': '1.0em'}}>
              <CardsTable gratitudeMessages={this.props.gratitudeMessages} />
            </div>
          </div>
          <div className="col m1">
          </div>
          <Arrows/>
        </div>

      </div>
    );
  }
}

module.exports = Home;
