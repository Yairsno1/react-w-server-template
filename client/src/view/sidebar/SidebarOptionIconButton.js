import React, {Component} from 'react';
import AbsSidebarOptionButton from './AbsSidebarOptionButton';
import PropTypes from 'prop-types';

//Awesome icons class should be passed on the {content} prop.
class SidebarOptionIconButton extends Component {
  render() {
    const iconClass = this.props.content;
    const iconColor = this.props.iconColor;
    const classItems = [
      iconClass,
      iconColor,
      'w3-xxlarge'];

    return (
      <AbsSidebarOptionButton textColor={iconColor}>
        <span className={classItems.join(' ')}></span>
      </AbsSidebarOptionButton>
    );
  }
}

SidebarOptionIconButton.propTypes = {
  content: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
};

export default SidebarOptionIconButton;
