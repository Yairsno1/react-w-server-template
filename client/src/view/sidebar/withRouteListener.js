//Todo: make this function lib function.

import React, {Component} from 'react';

function withRouteListener(NavCtrl, routeChangeHandler) {
  return (
    class RouteChangeListener extends Component {
      constructor(props) {
        super(props);
        this.currUrl = this.props.url;
        this.onRouteChange = routeChangeHandler;
      }

      componentDidMount() {
        this.onRouteChange(this.currUrl);
      }

      componentDidUpdate() {
        const tmpCurrUrl = this.currUrl || '';
        const tmpUrl = this.props.url || '';
        if (tmpCurrUrl.toUpperCase() !== tmpUrl.toUpperCase()) {
          this.currUrl = this.props.url;
          this.onRouteChange(this.currUrl);
        }
      }

      render() {
        return (
          <NavCtrl/>
        );
      }
    }
  );
}


export default withRouteListener;
