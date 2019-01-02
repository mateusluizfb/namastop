var React = require('react');

class Home extends React.Component {
  render() {
    return <div>Hello {this.props.title}</div>;
  }
}

module.exports = Home;
