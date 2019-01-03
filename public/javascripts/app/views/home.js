'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Imports = require('./imports');
var CardsTable = require('./cards_table');
var Arrows = require('./arrows');

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'home' },
        React.createElement(Imports, null),
        React.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'stylesheets/materialize.min.css' }),
        React.createElement('link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.5.0/css/all.css', integrity: 'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU', crossorigin: 'anonymous' }),
        React.createElement(
          'nav',
          null,
          React.createElement(
            'div',
            { className: 'nav-wrapper' },
            React.createElement(
              'a',
              { href: '#', className: 'brand-logo center' },
              'Namastop'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement('div', { className: 'col m1' }),
          React.createElement(
            'div',
            { className: 'col m10' },
            React.createElement(
              'div',
              { className: 'container', style: { 'marginTop': '1.0em' } },
              React.createElement(CardsTable, { gratitudeMessages: this.props.gratitudeMessages })
            )
          ),
          React.createElement('div', { className: 'col m1' }),
          React.createElement(Arrows, null)
        )
      );
    }
  }]);

  return Home;
}(React.Component);

module.exports = Home;