import React, {Component} from 'react';
import activityStatusEnum from './activityStatusEnum';
import {WaitCtrl, QCtrl} from './exprCtrl';
import PropTypes from 'prop-types';

class ActivityCtrl extends Component {

  componentDidMount() {
    this.props.nextQ();
  }

  render() {
    const classItems = [
      'w3-content',
      'w3-container',
      'w3-padding-16',
      'w3-' + this.props.color];

    const style = {
      border: 'solid 3px black'
    };

    let ExprCtrl = null;
    const status = this.props.activityStatus;
    if (activityStatusEnum.next === status) {
      ExprCtrl = <WaitCtrl />;
    } else if (activityStatusEnum.q === status) {
      ExprCtrl = <QCtrl text={this.props.qText}/>;
    }

    return (
      <div className={classItems.join(' ')}>
        <div className="w3-round-xlarge" style={style}>
          {ExprCtrl}
        </div>
      </div>
    );
  }
}

ActivityCtrl.propTypes = {
  color: PropTypes.string.isRequired,
  nextQ: PropTypes.func.isRequired,
};

export default ActivityCtrl;
