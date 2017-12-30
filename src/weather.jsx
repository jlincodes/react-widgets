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
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;
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
    return (
      <div>
        <h1>Weather</h1>
        <div className="weather">
          <p>The current temperature is:</p>
          <p>{this.state.temp} &#176;</p>
        </div>
      </div>
    );
  }
}
