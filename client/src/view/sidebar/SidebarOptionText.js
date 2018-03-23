import React from 'react';
import PropTypes from 'prop-types';

//Defined as a function for reference.
//With *my* coding convention React component must be a class.
function SidebarOptionText(props) {
  const textColor = "w3-text-" + props.color;

  return (
    <span className={textColor}><b>{props.value}</b></span>
  );
}

SidebarOptionText.propTypes = {
  value: PropTypes.string,
  color: PropTypes.string.isRequired,
};

export default SidebarOptionText;
