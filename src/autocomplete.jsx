import React from 'react';

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState( {inputValue: event.target.value });
  }

  findMatches() {
    const matches = [];

    if (this.state.inputValue.length === 0) {
      return this.props.names;
    }

    this.props.names.forEach(name => {
      let slice = name.slice(0, this.state.inputValue.length);
      if (slice.toLowerCase() === this.state.inputValue.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches found.');
    }

    return matches;
  }

  selectName(event) {
    let name = event.currentTarget.innerText;
    this.setState({ inputValue: name });
  }

  render() {
    let matches = this.findMatches().map((match, i) => {
      return (
        <li key={i} onClick={this.selectName}>{match}</li>
      );
    });
    return (
      <div>
        <h1>Autocomplete</h1>
        <input
          type='text'
          value={this.state.value}
          onChange={this.handleChange} />
        <ul className='auto-list'>{matches}</ul>
      </div>
    );
  }
}
