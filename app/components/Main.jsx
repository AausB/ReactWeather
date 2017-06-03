const React = require('react');
const {Nav} = require('Nav');

class Main extends React.Component {
  render() {
    return (
      <div className='main compenent'>
        <Nav/>
        <h2>Main Component</h2>
      </div>
    );
  }
}

module.exports = {Main};
