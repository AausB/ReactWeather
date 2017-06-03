// for ajax calls
const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=6cc40267fd38e9f85fa6dfaae3631d68&units=metric';

// my openWeatherMap appid: 6cc40267fd38e9f85fa6dfaae3631d68

const getTemp = (location) => {
  let encodedLocation = encodeURIComponent(location);
  let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

  return axios.get(requestUrl)
    // openweathermap api is a non standard promise api
    // this is why we need to do some special coding here
    .then((response) => {
      if (response.data.cod && response.data.message) {
        throw new Error(response.data.message);
      } else {
        return response.data.main.temp;
      }

    })
    .catch(function (error) {
      if (error.response) {
        // The request was made, but the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data.message);
        throw new Error(error.response.data.message);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
    // openweathermap api is a non standard promise api
    // this is why we need to do some special coding here
    // .catch((response) => {
    //   throw new Error(response.data.message);
    // });
};

module.exports = {
  getTemp
}
