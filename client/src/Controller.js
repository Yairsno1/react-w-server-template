import React, { Component } from 'react';
import {selectOperationAction} from './actions';
import MainView from './view/MainView';

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
    const handlers = {
      sidebarOptionSelected: this.handleSidebarOptionSelected,
    };

    return (
      <MainView eventHandlers={handlers}/>
    );
  }
}

export default Controller;
