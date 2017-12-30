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
          onClick={this.props.onSelectedTab.bind(null, index)}>
          {title}{' '}
        </li>
      );
    });
    return (
      <ul className='tab-header'>{headers}</ul>
    );
  }
}

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedPane: 0 };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num) {
    this.setState({ selectedPane: num });
  }

  render() {
    let pane = this.props.panes[this.state.selectedPane];
    return (
      <div className="tabs">
        <h1>Tabs</h1>
        <div>
          <Headers
            selectedPane={this.state.selectedPane}
            onSelectedTab={this.selectTab}
            panes={this.props.panes}>
          </Headers>
          <div className="tab-content">
            <article>{pane.content}</article>
          </div>
        </div>
      </div>
    );
  }
}
