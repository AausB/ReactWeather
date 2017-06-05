const React = require('react');
const PropTypes = require('prop-types');

/**
 * WeatherForm is a presentational component
 * It does not maintain its own state
 *
 * It takes the value from the input field and sends it to the parent container: Weather component
 */
class WeatherForm extends React.Component {
  onFormSubmit = (event) => {
    // do not reload the entire page
    event.preventDefault();

    // store the input field value in a local variable
    let location = this.refs.location.value;

    // is there any value of location
    if ( location.length > 0) {
      // clear the input field (imperative)
      this.refs.location.value = '';
      // this is the link to the parent container component
      // <GreeterForm onNewName={this.handleNewName}/>
    }

    // in container Weather component this is declared:
    // <WeatherForm onSearch={this.handleSearch}/>
    // call the parent with onSearch property value 'handleSearch':
    // of the Weather class (its like a callback)
    this.props.onSearch(location);
  };

  render() {
    return(
      // onSubmit event call this.onFormSubmit method of WeatherForm class
      // ref is a React built-in attribute
      <form onSubmit={this.onFormSubmit}>
        {/* ref is a React built-in attribute */}
        <div><input type="text" ref="location" placeholder="Enter city name"/></div>
        <div><button className="button expanded hollow">Get Weather</button></div>
      </form>
    );
  }
}

WeatherForm.propTypes = {
  onSearch: PropTypes.func.isRequired
};

module.exports = {WeatherForm};
