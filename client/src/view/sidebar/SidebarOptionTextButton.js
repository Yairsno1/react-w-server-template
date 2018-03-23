import React, {Component} from 'react';
import AbsSidebarOptionButton from './AbsSidebarOptionButton';
import PropTypes from 'prop-types';

class SidebarOptionTextButton extends Component {
  render() {
    const text = this.props.content;
    const txtColor = this.props.textColor;

    return (
      <AbsSidebarOptionButton textColor={txtColor} onSelected={this.props.onSelected}>
        <span className="w3-xlarge"><b>{text}</b></span>
      </AbsSidebarOptionButton>
    );
  }
}

SidebarOptionTextButton.propTypes = {
  content: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  onSelected: PropTypes.func.isRequired,
};

export default SidebarOptionTextButton;
