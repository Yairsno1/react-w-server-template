import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {routeEnum} from '../../util/navHelper'

class SidebarNavigation extends Component {
  render() {
    let url = ''
    if (routeEnum.home === this.props.url) {
      url = '';
    } else if (routeEnum.add === this.props.url) {
      url = 'Add';
    }
    else if (routeEnum.sub === this.props.url) {
      url = 'Substract';
    } else if (routeEnum.mult === this.props.url) {
      url = 'Multiply';
    } else if (routeEnum.div === this.props.url) {
      url = 'Divide';
    }

    const linkStyle = {
      textDecoration: 'none',
    };

    return (
      <NavLink
        to={url}
        style={linkStyle}
      >
        {this.props.children}
      </NavLink>
    );
  }
}

export default SidebarNavigation;
