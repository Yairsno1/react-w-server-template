import React, {Component} from 'react';

class SidebarOption extends Component {
  render () {
    let classItems = [
      'w3-bar-item',
      'w3-center'];
    const selected = this.props.isSelected ? true : false;

    if (selected) {
      classItems.push('w3-rightbar');
      classItems.push('w3-border-' + this.props.color);
    }

    return (
      <div className={classItems.join(' ')}>
        {this.props.theBtn}
        {this.props.theTxt}
      </div>
    );
  }
}

export default SidebarOption;
