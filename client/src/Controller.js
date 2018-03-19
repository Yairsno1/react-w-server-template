import React, { Component } from 'react';
import {selectOperationAction} from './actions';
import AppView from './view/AppView';

class Controller extends Component {
  constructor(props) {
    super(props);

    this.handleSidebarOptionSelected = this.handleSidebarOptionSelected.bind(this);
  }

  handleSidebarOptionSelected(dispatch, option) {
    const currSelectedOption = this.props.store.getState().activeOperation;

    if (currSelectedOption !== option)
    {
      dispatch(selectOperationAction(option));
    }
  }

  render() {
    const currSelectedOption = this.props.store.getState().activeOperation;
    const handlers = {
      sidebarOptionSelected: this.handleSidebarOptionSelected,
    };

    return (
      <AppView activity={currSelectedOption} eventHandlers={handlers}/>
    );
  }
}

export default Controller;
