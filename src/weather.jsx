import React from 'react';

export default class Weather extends React.Component {
  constructor() {
    super();
    this.state = { weather: null };
    this.locWeather = this.locWeather.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.locWeather);
  }

  locWeather(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    // console.log(lat);
    // console.log(lon);
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;
    const apiKey = "1833ae133bacd21f1acde07a44b0fe68";
    url += `&APPID=${apiKey}`;

    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        console.log(request.response);
        const data = JSON.parse(request.responseText);
        this.setState({ weather: data });
      }
    };

    request.open('GET', url, true);
    request.send();
  }

  render() {
    let content;

    if (this.state.weather) {
      let weatherData = this.state.weather;
      // gets current temp in kelvin, then convert to celcius
      let currentTemp = Math.round((weatherData.main.temp - 273.5) *1.8 + 32);
      let location = weatherData.name;
      let humidity = weatherData.main.humidity;
      let windSpeed = weatherData.wind.speed;
      content = <div>
                  <p>The current temperature in {location} is: {currentTemp}&#176; F</p>
                  <p>with {humidity}&#37; humidity and winds at {windSpeed} mph </p>
                </div>;
    } else {
      content = <div>loading weather...</div>;
    }
    return (
      <div>
        <h1>Weather</h1>
        <div className="weather">
          {content}
        </div>
      </div>
    );
  }
}
