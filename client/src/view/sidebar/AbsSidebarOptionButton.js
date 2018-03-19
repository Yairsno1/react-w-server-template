import React, {Component} from 'react';

class AbsSidebarOptionButton extends Component {
  render() {
    const txtColor = this.props.textColor;
    const classItems = [
      'w3-button',
      'hp-btn',
      'w3-block',
      'w3-padding-small',
      'w3-text-' + txtColor,
      'w3-hover-' + txtColor,
      'w3-hover-text-black'];

    return (
      <button className={classItems.join(' ')} onClick={this.props.onSelected}>
        {this.props.children}
      </button>
    );
  }
}

export default AbsSidebarOptionButton;
