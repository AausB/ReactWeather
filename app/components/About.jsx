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
      <h1 className="page-title text-center">About</h1>
      <p>This is a weather application built on React.</p>
      <p>
        Here are some of the used tools:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react" target="_blank">React</a> - this is the Javascript framework used
        </li>
        <li>
          <a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - used for serching the current weather of a location
        </li>
      </ul>
    </div>
  );
};

module.exports = {About};
