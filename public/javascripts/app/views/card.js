'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var Card = function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card(props) {
    _classCallCheck(this, Card);

    var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));

    _this.textStyle = {
      'width': '150px',
      'height': '179px',
      'overflowWrap': 'break-word'
    };

    _this.imageStyle = {
      'borderRadius': '50%',
      'top': '15px',
      'left': '12px'
    };
    return _this;
  }

  _createClass(Card, [{
    key: 'firstName',
    value: function firstName(fullName) {
      return fullName.substr(0, fullName.indexOf(' ')) || fullName;
    }
  }, {
    key: 'render',
    value: function render() {
      var receiverFirstName = this.firstName(this.props.receiver);
      var senderFirstName = this.firstName(this.props.sender);
      var receiverPhoto = this.props.receiverPhoto || "/images/default.png";

      return React.createElement(
        'div',
        { className: 'col s12 m4' },
        React.createElement(
          'div',
          { className: 'card horizontal' },
          React.createElement(
            'div',
            { className: 'card-image' },
            React.createElement('img', { style: this.imageStyle, src: receiverPhoto })
          ),
          React.createElement(
            'div',
            { className: 'card-stacked' },
            React.createElement(
              'div',
              { className: 'card-content' },
              React.createElement(
                'h5',
                null,
                receiverFirstName
              ),
              React.createElement(
                'p',
                { style: this.textStyle },
                this.props.message,
                ' - ',
                senderFirstName
              )
            )
          )
        )
      );
    }
  }]);

  return Card;
}(React.Component);

module.exports = Card;