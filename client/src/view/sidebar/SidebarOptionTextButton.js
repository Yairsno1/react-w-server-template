import React, {Component} from 'react';
import AbsSidebarOptionButton from './AbsSidebarOptionButton';

class SidebarOptionTextButton extends Component {
  render() {
    const text = this.props.content;
    const txtColor = this.props.textColor;

    return (
      <AbsSidebarOptionButton textColor={txtColor}>
        <span className="w3-xlarge"><b>{text}</b></span>
      </AbsSidebarOptionButton>
    );
  }
}

export default SidebarOptionTextButton;
