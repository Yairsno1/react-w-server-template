import React, {Component} from 'react';

class MainPanelCtrl extends Component {

  render() {
    const classItems = [
      'w3-col',
      's9',
      'm10',
      'l11'];

    return (
      <div className={classItems.join(' ')}>
        <div className="w3-display-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MainPanelCtrl;
