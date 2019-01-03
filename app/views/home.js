const React = require('react');
const Imports = require('./imports');
const CardsTable = require('./cards_table');

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activePage: 1 };

    this.arrowRightStyle = {
      'position': 'absolute',
      'top': '50%',
      'right': '10%'
    }

    this.arrowLeftStyle = {
      'position': 'absolute',
      'top': '50%',
      'left': '10%',
      'color': '#d0d3d8'
    }
  }

  render() {
    return (
      <div>
        <Imports/>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">Namastop</a>
          </div>
        </nav>

        <div className="row">
          <div className="col m1">
            <i style={this.arrowLeftStyle} class="fas fa-arrow-left fa-5x"/>
          </div>
          <div className="col m10">
            <div className="container" style={{'marginTop': '1.0em'}}>
              <CardsTable gratitudeMessages={this.props.gratitudeMessages} />
            </div>
          </div>
          <div className="col m1">
            <i style={this.arrowRightStyle} class="fas fa-arrow-right fa-5x"/>
          </div>
        </div>

      </div>
    );
  }
}

module.exports = Home;
