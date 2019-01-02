var React = require('react');

class Imports extends React.Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="stylesheets/materialize.min.css"/>
        <script src="javascripts/materialize.min.js"/>
      </div>
    );
  }
}

module.exports = Imports;
