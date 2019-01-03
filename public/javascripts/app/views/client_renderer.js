'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Imports = require('./imports');
var CardsTable = require('./cards_table');
var Card = require('./card');
var Home = require('./cards_table');
var Arrows = require('./cards_table');

ReactDOM.hydrate(React.createElement(Home, { gratitudeMessages: [] }), document.getElementById('home'));