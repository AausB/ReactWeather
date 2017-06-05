const React = require('react');
const {WeatherForm} = require('WeatherForm');
const {WeatherMessage} = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');


// container component
// - maintains the state: location and temperature
class Weather extends React.Component {
  constructor(props) {
      super(props);

      // init state
      this.state = {
        isLoading: false,
      };
  }

  handleSearch = (location) => {

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then((temperature) => {
      this.setState({
        location: location,
        temperature: temperature,
        isLoading: false
      });
    }).
    catch((errorMessage) => {
      this.setState({
        isLoading: false
      });
      alert(errorMessage);
    });
  };

  render() {
    // set local variables with ES6 object destructuring
    let {isLoading, location, temperature} = this.state;

    const renderMessage = () => {
      if (isLoading) {
        return(
          <h3>Fetching weather data...</h3>
        );

      } else if (temperature && location) {
        return(
          <WeatherMessage temperature={temperature} location={location}/>
        );
      }
    };

    return(
      <div className='weather component'>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
}

module.exports = {Weather};
