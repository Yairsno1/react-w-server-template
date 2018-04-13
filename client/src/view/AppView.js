import React, { Component } from 'react';
import withRouteListener from './sidebar/withRouteListener';
import Sidebar from './sidebar/Sidebar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {isLegalRoute} from '../util/navHelper';
import CreatePageForRoute from './CreatePageForRoute';
import PageNotFound from './PageNotFound';
import MainPanelCtrl from './activityArea/MainPanelCtrl';
import resolveRoute from './resolveRoute';
import PropTypes from 'prop-types';

class AppView extends Component {

  constructor(props) {
    super(props);

    this.state = {url: undefined};

    this.handleRouteChange = this.handleRouteChange.bind(this);

    //-----------------------------------
    //Todo: make this code block lib function.
    const NavigationWithListener = withRouteListener(Sidebar, this.handleRouteChange);
    this.Navigation = <Router>
      <Route
        path="/:url?"
        component={
          (props) => <NavigationWithListener url={props.match.params.url}/>
        }
      />
    </Router>
  }
  //------------------------------------

  handleRouteChange(newUrl) {
    this.props.eventHandlers.routeChanged(newUrl);
    this.setState({url: newUrl});
  }

  render() {
    const currUrl = this.state.url;
    const routeFound = isLegalRoute(currUrl);
    const ehs = this.props.eventHandlers;

    const MainPanel = routeFound ?
      CreatePageForRoute(MainPanelCtrl, currUrl, resolveRoute) :
      <PageNotFound/>;

    let rv = null;
    if (routeFound) {
      rv = (
        <div className="w3-row">
          {this.Navigation}
          <MainPanel eventHandlers={ehs}/>
        </div>
      );
    } else {
      rv = MainPanel;
    }

    return rv;
  }
}

AppView.propTypes = {
  eventHandlers: PropTypes.object.isRequired,
  route: PropTypes.string,
};

export default AppView;
