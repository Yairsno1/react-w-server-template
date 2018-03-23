import React, { Component } from 'react';
import {routeEnum} from './util/navHelper';
import {selectOperationAction} from './actions';
import AppView from './view/AppView';

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

    this.handleSidebarOptionSelected = this.handleSidebarOptionSelected.bind(this);
  }

  handleSidebarOptionSelected(dispatch, option) {
    const currSelectedOption = this.props.store.getState().activeOperation;

    if (currSelectedOption !== option)
    {
      dispatch(selectOperationAction(option));
    }
  }

  componentDidMount() {
    this.setState({operation: route2Op(this.props.route)});
  }

  render() {
    const handlers = {
      sidebarOptionSelected: this.handleSidebarOptionSelected,
    };

    return (
      <AppView
        route={this.props.route}
        eventHandlers={handlers}/>
    );
  }
}

export default Controller;
