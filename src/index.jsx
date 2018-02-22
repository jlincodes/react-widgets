import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import Autocomplete from './autocomplete';

const panes = [
  {title: 'one', content: 'first'},
  {title: 'two', content: 'second'},
  {title: 'three', content: 'third'},
];

// popular names https://www.ssa.gov/oact/babynames/decades/century.html
const names = [
  'Barbara',
  'Charles',
  'Christopher',
  'David',
  'Daniel',
  'Elizabeth',
  'James',
  'Jennifer',
  'Jessica',
  'John',
  'Linda',
  'Margaret',
  'Mary',
  'Matthew',
  'Patricia',
  'Richard',
  'Robert',
  'Sarah',
  'Susan',
  'William'
];

class Root extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <Weather />
        <div className='interactive'>
          <Tabs panes={panes} />
          <Autocomplete names={names}/>
        </div>
        <footer>
          <ul>
            <li>
              <a href="https://github.com/julielin0812/react-widgets">Github Project Repo</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/julielin0812/">LinkedIn</a>
            </li>
            <li>
              <a href="http://www.julielin.me/">Portfolio</a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});
