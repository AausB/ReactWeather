const React = require('react');
const {WeatherForm} = require('WeatherForm');
const {WeatherMessage} = require('WeatherMessage');
const {ErrorModal} = require('ErrorModal');
const openWeatherMap = require('openWeatherMap');
const queryString = require('query-string');

// container component
// - maintains the state: location and temperature
class Weather extends React.Component {
  constructor(props) {
      super(props);

      // init state
      this.state = {
        isLoading: false,
        errorMessage: undefined,
        location: undefined,
        temperature: undefined
      };
  }

  handleSearch = (location) => {

    // reset state data before doing openWeatherMap call
    // to prevent unexpected results
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temperature: undefined
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

  componentDidMount = () => {
    // get the location from search string
    let parsed = queryString.parse(location.search);

    if (parsed.location && parsed.location.length > 0) {
      this.handleSearch(parsed.location);

      // remove the search string from URL: reset to home
      window.history.pushState({}, document.title, window.location.pathname)
    }
  }

  componentWillReceiveProps = (newProps) => {
    /*
      Hmm. This is from the tutorial. But it works without it.
      For more information about componentWillReceiveProps
      https://facebook.github.io/react/docs/react-component.html#componentwillreceiveprops
     */
    // // get the location from search string
    // let parsed = queryString.parse(location.search);
    //
    // if (parsed.location && parsed.location.length > 0) {
    //   this.handleSearch(parsed.location);
    //
    //   // remove the search string from URL: reset to home
    //   window.history.pushState({}, document.title, window.location.pathname)
    // }
  }

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
