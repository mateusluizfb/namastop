var React = require('react');

class Imports extends React.Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="stylesheets/materialize.min.css"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"/>

        <script src="javascripts/materialize.min.js"/>


        <script src="javascripts/main.js"/>
        <script src="https://unpkg.com/react@16/umd/react.development.js"/>
        <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"/>
      </div>
    );
  }
}

module.exports = Imports;
