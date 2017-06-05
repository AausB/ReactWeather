const React = require('react');
const {WeatherForm} = require('WeatherForm');
const {WeatherMessage} = require('WeatherMessage');
const {ErrorModal} = require('ErrorModal');
const openWeatherMap = require('openWeatherMap');

// container component
// - maintains the state: location and temperature
class Weather extends React.Component {
  constructor(props) {
      super(props);

      // init state
      this.state = {
        isLoading: false,
        errorMessage: undefined
      };
  }

  handleSearch = (location) => {

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then((temperature) => {
      this.setState({
        location: location,
        temperature: temperature,
        isLoading: false
      });
    }).
    catch((error) => {
      this.setState({
        isLoading: false,
        errorMessage: error.message
      });
    });
  };

  render() {
    // set local variables with ES6 object destructuring
    let {isLoading, location, temperature, errorMessage} = this.state;

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

    const renderError = () => {
      if (typeof errorMessage === 'string') {
        return(
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return(
      <div className='weather component'>
        <h1 className="page-title text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
}

module.exports = {Weather};
