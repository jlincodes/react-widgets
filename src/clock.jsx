import React from 'react';

export default class Clock extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date() };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    let date = this.state.time.toDateString();

    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    return (
      <div>
        <h1>Clock</h1>
        <div className="clock">
          <p>
            <span>The Current Time is:</span>
            <span>{hours}:{minutes}:{seconds}</span>
          </p>
          <p>
            <span>Today is:</span>
            <span>{date}</span>
          </p>
        </div>
      </div>
    );
  }
}
