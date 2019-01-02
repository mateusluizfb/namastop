const React = require('react');
const Imports = require('./imports');
const CardsTable = require('./cards_table');

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

        <CardsTable gratitudeMessages={this.gratitudeMessages} />
      </div>
    );
  }
}

module.exports = Home;
