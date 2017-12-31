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

const names = [
  'Emma',
  'Olivia',
  'Ava',
  'Sophia',
  'Isabella',
  'Mia',
  'Charlotte',
  'Abigail',
  'Emily',
  'Harper',
  'Noah',
  'Liam',
  'William',
  'Mason',
  'James',
  'Benjamin',
  'Jacob',
  'Michael',
  'Elijah',
  'Ethan'
];

class Root extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <Weather />
        <div>
          <Tabs panes={panes} />
          <Autocomplete names={names}/>
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});
