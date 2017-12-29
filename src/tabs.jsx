import React from 'react';

class Headers extends React.Component {
  render () {
    let selectedPane = this.props.selectedPane;
    let headers = this.props.panes.map((pane, index) => {
      let title = pane.title;
      let status = '';
      if (index === selectedPane) {
        status = 'active';
      }

      return (
        <li
          key={index}
          className={status}
          onClock={this.props.onSelectedTab.bind(null, index)}>
          {title}{' '}
        </li>
      );
    });
    return (
      <ul className='tab-header'>{headers}</ul>
    );
  }
}

export default class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedPane: 0 };
  }

  selectTab(num) {
    this.setState({ selectPane: num });
  }

  render() {
    let pane = this.props.panes[this.state.selectedPane];
    return (
      <div>
        <h1>Tabs</h1>
        <div>
          <Headers
            selectedPane={this.state.selectedPane}
            onSelectedTab={this.selectTab}
            panes={this.props.panes}>
          </Headers>
          <div>
            <article>{pane.content}</article>
          </div>
        </div>
      </div>
    );
  }
}