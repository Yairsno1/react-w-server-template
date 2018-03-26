import React, { Component } from 'react';
import {routeEnum} from './util/navHelper';
import {changeActivityStatusAction} from './actions';
import activityStatusEnum from './view/activityArea/activityStatusEnum';
import AppView from './view/AppView';
import PropTypes from 'prop-types';

const operationKindEnum = {
  noOp: 0,
  add: 1,
  sub: 2,
  mult: 3,
  div: 4,
};

const route2Op = (route) => {
  let rv = operationKindEnum.noOp;

  if (route){
    const tmpRoute = route.toUpperCase();
    if (routeEnum.add === tmpRoute) {
      rv = operationKindEnum.add;
    } else if (routeEnum.sub === tmpRoute) {
      rv = operationKindEnum.sub;
    } else if (routeEnum.mult === tmpRoute) {
      rv = operationKindEnum.mult;
    } else if (routeEnum.div === tmpRoute) {
      rv = operationKindEnum.div;
    }
  }

  return rv;
};

class Controller extends Component {
  constructor(props) {
    super(props);

    this.state = {operation: operationKindEnum.noOp};

    this.handleReceiveExpression = this.handleReceiveExpression.bind(this);
    this.handleSidebarOptionSelected = this.handleSidebarOptionSelected.bind(this);
  }

  handleReceiveExpression(dispatch) {
    //-------------------------------------------
    //AJAX mock
    //Remove after AJAX call will be implemented.
    setTimeout(() => {
        dispatch(changeActivityStatusAction(activityStatusEnum.q));
      },
      2000
    );
    //-------------------------------------------
    //Todo ...
  }

  handleSidebarOptionSelected(dispatch, option) {
    this.setState({operation: route2Op(option)});
    dispatch(changeActivityStatusAction(activityStatusEnum.next));
  }

  componentDidMount() {
    this.setState({operation: route2Op(this.props.route)});
  }

  render() {
    const handlers = {
      sidebarOptionSelected: this.handleSidebarOptionSelected,
      receiveExpression: this.handleReceiveExpression,
    };

    return (
      <AppView
        route={this.props.route}
        eventHandlers={handlers}/>
    );
  }
}

Controller.propTypes = {
  route: PropTypes.string,
  store: PropTypes.object.isRequired,
};

export default Controller;
