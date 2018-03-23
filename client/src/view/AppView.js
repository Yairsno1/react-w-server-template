import React, { Component } from 'react';

import Sidebar from './sidebar/Sidebar';
import ActivityPanel from './activityArea/ActivityPanel';

class AppView extends Component {
  render() {
    const ehs = this.props.eventHandlers;

    //Demo of the two method to pass React-Router's route to components
    //1. <Sidebar/> use withRouter()
    //2. With <ActivityPanel /> the route is injected as prop.
    return (
      <div className="w3-row">
        <Sidebar onOptionSelected={ehs.sidebarOptionSelected}/>
        <ActivityPanel route={this.props.route} />
      </div>
    );
  }
}

export default AppView;
//<Sidebar route={this.props.route} onOptionSelected={ehs.sidebarOptionSelected}/>
