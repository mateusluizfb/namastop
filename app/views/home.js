const React = require('react');
const Imports = require('./imports');

class Home extends React.Component {
  render() {
    return (
      <div>
        <Imports/>

        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo center">Namastop</a>
          </div>
        </nav>



      </div>
    );
  }
}

module.exports = Home;
