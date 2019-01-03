"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var Imports = function (_React$Component) {
  _inherits(Imports, _React$Component);

  function Imports() {
    _classCallCheck(this, Imports);

    return _possibleConstructorReturn(this, (Imports.__proto__ || Object.getPrototypeOf(Imports)).apply(this, arguments));
  }

  _createClass(Imports, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement("link", { rel: "stylesheet", type: "text/css", href: "stylesheets/materialize.min.css" }),
        React.createElement("link", { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.5.0/css/all.css", integrity: "sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU", crossorigin: "anonymous" }),
        React.createElement("script", { src: "javascripts/materialize.min.js" }),
        React.createElement("script", { src: "javascripts/app/views/home.js" }),
        React.createElement("script", { src: "https://unpkg.com/react@16/umd/react.development.js" }),
        React.createElement("script", { src: "https://unpkg.com/react-dom@16/umd/react-dom.development.js" })
      );
    }
  }]);

  return Imports;
}(React.Component);

module.exports = Imports;