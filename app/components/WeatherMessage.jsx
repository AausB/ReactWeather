const React = require('react');

// presentational component
// displays temperature message
// class WeatherMessage extends React.Component {
//
//   render() {
//     // set local variables with ES6 object destructuring
//     let {location, temperature} = this.props;
//
//     return(
//       <div className='weather-message component'>
//         <h3>It is {temperature} °C in {location}</h3>
//       </div>
//     );
//   }
// }

// const WeatherMessage = (props) => {
//   let {location, temperature} = props;

// even go further with object destructuring:
// right inside the function parameters! Wow!
const WeatherMessage = ({location, temperature}) => {
  return(
    <div className='weather-message component'>
      <h3>It is {temperature} °C in {location}</h3>
    </div>
  );
};

module.exports = {WeatherMessage};
