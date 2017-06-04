const React = require('react');
const {NavLink} = require('react-router-dom');

class Nav extends React.Component {
  onSearch = (event) => {
    event.preventDefault();
    alert('Not yet wired up');
  }

  render() {
    return(
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
            <li className='menu-text'>
              React Weather App
            </li>
            <li>
              <NavLink exact to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</NavLink>
            </li>
            <li>
              <NavLink to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
            </li>
          </ul>
        </div>
        <div className='top-bar-right'>
          <form onSubmit={this.onSearch}>
            <ul className='menu'>
              <li>
                <input type='search' placeholder='Search weather'/>
              </li>
              <li>
                <input type='submit' className='button' value='Get weather'/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
};

module.exports = {Nav};
