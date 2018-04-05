import React, {Component} from 'react';

class MainPanelCtrl extends Component {

  render() {
    const classItems = [
      'w3-col',
      's9',
      'm10',
      'l11',
      'w3-padding-48'];

    return (
      <div className={classItems.join(' ')}>
        {this.props.children}
      </div>
    );
  }
}

export default MainPanelCtrl;
