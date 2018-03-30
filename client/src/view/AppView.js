import React, { Component } from 'react';
import Sidebar from './sidebar/Sidebar';
import ActivityPanel from './activityArea/ActivityPanel';
import PropTypes from 'prop-types';

class AppView extends Component {
  render() {
    const ehs = this.props.eventHandlers;

    //Demo of the two method to pass React-Router's route to components
    //1. <Sidebar/> use withRouter()
    //2. With <ActivityPanel /> the route is injected as prop.
    return (
      <div className="w3-row">
        <Sidebar onOptionSelected={ehs.sidebarOptionSelected}/>
        <ActivityPanel
          route={this.props.route}
          onNextQ={ehs.receiveExpression}
          onAnswer={ehs.answer} />
      </div>
    );
  }
}

AppView.propTypes = {
  eventHandlers: PropTypes.object.isRequired,
  route: PropTypes.string,
};

export default AppView;
