const React = require('react');
const Imports = require('./imports');
const CardsTable = require('./cards_table');

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activePage: 1 };

    this.state.arrowRightStyle = {
      'position': 'absolute',
      'top': '50%',
      'right': '10%',
      'color': 'inherit'
    }

    this.state.arrowLeftStyle = {
      'position': 'absolute',
      'top': '50%',
      'left': '10%',
      'color': '#d0d3d8'
    }
  }

  backOnePage() {
    let activePage =- this.state.activePage;
    this.setState({ activePage });
  }

  fowardOnePage() {
    let activePage =+ this.state.activePage;
    this.setState({ activePage });
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
            <a style={this.state.arrowLeftStyle} onClick={this.backOnePage()} className="fas fa-arrow-left fa-5x" />
          </div>
          <div className="col m10">
            <div className="container" style={{'marginTop': '1.0em'}}>
              <CardsTable gratitudeMessages={this.props.gratitudeMessages} />
            </div>
          </div>
          <div className="col m1">
            <a href='#' style={this.state.arrowRightStyle} onClick={this.fowardOnePage()} className="fas fa-arrow-right fa-5x" />
          </div>
        </div>

      </div>
    );
  }
}

module.exports = Home;
