import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';

const panes = [
  {title: 'one', content: 'first'},
  {title: 'two', content: 'second'},
  {title: 'three', content: 'third'},
];

class Root extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <div>
          <Tabs panes={panes} />
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});
