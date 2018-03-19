import React, { Component } from 'react';

import Sidebar from './sidebar/Sidebar';
import ActivityPanel from './activityArea/ActivityPanel';

class AppView extends Component {
  render() {
    const ehs = this.props.eventHandlers;

    return (
      <div className="w3-row">
        <Sidebar onOptionSelected={ehs.sidebarOptionSelected}/>
        <ActivityPanel />
      </div>
    );
  }
}

export default AppView;
