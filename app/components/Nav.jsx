const React = require('react');
const {NavLink} = require('react-router-dom');

class Nav extends React.Component {
  onSearch = (event) => {
    event.preventDefault();

    // store the input field value in a local variable
    let location = this.refs.search.value;
    let encodedLocation = encodeURIComponent(location.trim());

    console.log(encodedLocation);

    // is there any value of location
    if ( location.length > 0) {
      // clear the input field (imperative)
      this.refs.search.value = '';
      // create a query string and redirect
      window.location = `/?location=${encodedLocation}`;
    }
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
                <input type='search' ref="search" placeholder='Search weather by city'/>
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
