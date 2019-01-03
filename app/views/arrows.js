const React = require('react');
const ReactDOM = require('react-dom');

class Arrows extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activePage: 1 };

    this.state.arrowRightStyle = {
      'position': 'absolute',
      'top': '50%',
      'right': '10%',
      'color': 'inherit'
    };

    this.state.arrowLeftStyle = {
      'position': 'absolute',
      'top': '50%',
      'left': '10%',
      'color': '#d0d3d8'
    };
  }

  backOnePage(e) {
    e.preventDefault();

    let activePage =- this.state.activePage;
    if (activePage == 1) {
      let arrowLeftStyle = {
        'position': 'absolute',
        'top': '50%',
        'left': '10%',
        'color': '#d0d3d8',
        'pointer-events': 'none',
        'cursor': 'default',
        'opacity': '0.6'
      };
      return this.setState({ activePage, arrowLeftStyle});
    }

    this.setState({ activePage });
  }

  fowardOnePage(e) {
    e.preventDefault();

    let activePage =+ this.state.activePage;
    if (activePage > 1) {
      let arrowLeftStyle = {
        'position': 'absolute',
        'top': '50%',
        'left': '10%',
        'color': 'inherit'
      };

      return this.setState({ activePage, arrowLeftStyle});
    }
    this.setState({ activePage });
  }


  render() {
    return (
      <span id="arrows">
        <a style={this.state.arrowLeftStyle} onClick={this.backOnePage} className="fas fa-arrow-left fa-5x" />
        <a href='#' style={this.state.arrowRightStyle} onClick={() => {console.log('click')}} className="fas fa-arrow-right fa-5x" />
      </span>
    );
  }
}

module.exports = Arrows;
