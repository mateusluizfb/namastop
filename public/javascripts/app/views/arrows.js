'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactDOM = require('react-dom');

var Arrows = function (_React$Component) {
  _inherits(Arrows, _React$Component);

  function Arrows(props) {
    _classCallCheck(this, Arrows);

    var _this = _possibleConstructorReturn(this, (Arrows.__proto__ || Object.getPrototypeOf(Arrows)).call(this, props));

    _this.state = { activePage: 1 };

    _this.state.arrowRightStyle = {
      'position': 'absolute',
      'top': '50%',
      'right': '10%',
      'color': 'inherit'
    };

    _this.state.arrowLeftStyle = {
      'position': 'absolute',
      'top': '50%',
      'left': '10%',
      'color': '#d0d3d8'
    };

    return _this;
  }

  _createClass(Arrows, [{
    key: 'backOnePage',
    value: function backOnePage(e) {
      e.preventDefault();

      var activePage = -this.state.activePage;
      if (activePage == 1) {
        var arrowLeftStyle = {
          'position': 'absolute',
          'top': '50%',
          'left': '10%',
          'color': '#d0d3d8',
          'pointer-events': 'none',
          'cursor': 'default',
          'opacity': '0.6'
        };
        return this.setState({ activePage: activePage, arrowLeftStyle: arrowLeftStyle });
      }

      this.setState({ activePage: activePage });
    }
  }, {
    key: 'fowardOnePage',
    value: function fowardOnePage(e) {
      console.log('q');
      e.preventDefault();

      console.log('oi');
      var activePage = +this.state.activePage;
      if (activePage > 1) {
        var arrowLeftStyle = {
          'position': 'absolute',
          'top': '50%',
          'left': '10%',
          'color': 'inherit'
        };

        return this.setState({ activePage: activePage, arrowLeftStyle: arrowLeftStyle });
      }
      this.setState({ activePage: activePage });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'span',
        { id: 'arrows' },
        React.createElement('a', { style: this.state.arrowLeftStyle, onClick: this.backOnePage, className: 'fas fa-arrow-left fa-5x' }),
        React.createElement('a', { href: '#', style: this.state.arrowRightStyle, onClick: function onClick() {
            console.log('click');
          }, className: 'fas fa-arrow-right fa-5x' })
      );
    }
  }]);

  return Arrows;
}(React.Component);

module.exports = Arrows;