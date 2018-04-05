import React, { Component } from 'react';
import Sidebar from './sidebar/Sidebar';
import CreatePageForRoute from './CreatePageForRoute';
import MainPanelCtrl from './activityArea/MainPanelCtrl';
import resolveRoute from './resolveRoute';
import PropTypes from 'prop-types';

class AppView extends Component {

  constructor(props) {
    super(props);
    this.routeTrack = {
      url: this.props.route + '',
      mainPanelCtrl: null,
    };
  }

  componentWillMount() {
    this.routeTrack.url = this.props.route + '';
    this.routeTrack.mainPanelCtrl = CreatePageForRoute(MainPanelCtrl, this.props.route, resolveRoute);
  }

  render() {
    const ehs = this.props.eventHandlers;

    //Demo of the two method to pass React-Router's route to components
    //1. <Sidebar/> use withRouter()
    //2. With <MainPanel /> the route is injected as prop.
    if ((this.props.route + '').toUpperCase() !== (this.routeTrack.url).toUpperCase()) {
      this.routeTrack.url = this.props.route + '';
      this.routeTrack.mainPanelCtrl = CreatePageForRoute(MainPanelCtrl, this.props.route, resolveRoute);
    }

    const MainPanel = this.routeTrack.mainPanelCtrl;
    return (
      <div className="w3-row">
        <Sidebar onOptionSelected={ehs.sidebarOptionSelected}/>
        <MainPanel eventHandlers={ehs}/>
      </div>
    );
  }
}

AppView.propTypes = {
  eventHandlers: PropTypes.object.isRequired,
  route: PropTypes.string,
};

export default AppView;
