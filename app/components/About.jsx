const React = require('react');

// // using ReactComponent class
// class About extends React.Component {
//   render() {
//     return(
//       <div className='about component'>
//         <h3>About Component</h3>
//       </div>
//     );
//   }
// }

// stateless functional component
// simpler but only for components without state
const About = (props) => {
  return(
    <div>
      <h3>About</h3>
      <p>Welcome to the About page</p>
    </div>
  );
};

module.exports = {About};
