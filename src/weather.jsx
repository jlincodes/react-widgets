import React from 'react';

export default class Weather extends React.Component {
  constructor() {
    super();
    this.state = { temp: null };
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
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;
    const apiKey = "1833ae133bacd21f1acde07a44b0fe68";
    url += `&APPID=${apiKey}`;

    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        let kel = JSON.parse(request.response).main.temp;
        let farh = Math.round((kel - 273.15) * 1.8 + 32);
        this.setState({ temp: farh });
      }
    };
    request.send();
  }

  render() {
    return (
      <div>
        <h1>Weather</h1>
        <div className="weather">
          <h2>The current temperature is:</h2>
          <h2>{this.state.temp} &#176;</h2>
        </div>
      </div>
    );
  }
}
