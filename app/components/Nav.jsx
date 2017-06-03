const React = require('react');
const {NavLink} = require('react-router-dom');

// class Nav extends React.Component {
//   render() {
//     return(
//       <ul className='nav component'>
//         <li>
//           <NavLink exact to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Home</NavLink>
//         </li>
//         <li>
//           <NavLink to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</NavLink>
//         </li>
//         <li>
//           <NavLink to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
//         </li>
//       </ul>
//     );
//   }
// }

const Nav = (props) => {
  return(
    <nav>
      <h3>Nav stateless functional component</h3>
      <ul className='nav component'>
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
    </nav>
  );
};


module.exports = {Nav};
