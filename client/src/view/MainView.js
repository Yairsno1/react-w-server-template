import React, { Component } from 'react';
import Sidebar from './sidebar/Sidebar';

class MainView extends Component {
  render() {
    const ehs = this.props.eventHandlers;

    return (
      <div className="w3-row">
        <Sidebar onOptionSelected={ehs.sidebarOptionSelected}/>
      </div>
    );
  }
}

export default MainView;
