import React from 'react';

//Defined as a function for reference.
//With *my* coding convention React component must be a class.
function SidebarOptionText(props) {
  const textColor = "w3-text-" + props.color;

  return (
    <span className={textColor}><b>{props.value}</b></span>
  );
}

export default SidebarOptionText;
