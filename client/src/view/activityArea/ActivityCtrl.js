import React, {Component} from 'react';
import activityStatusEnum from './activityStatusEnum';
import {WaitCtrl, QCtrl, ACtrl} from './exprCtrl';
import AnswerCtrl from './AnswerCtrl';
import NextQCtrl from './NextQCtrl';
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
    let CmdCtrl = null;
    const status = this.props.activityStatus;
    if (activityStatusEnum.next === status) {
      ExprCtrl = <WaitCtrl />;
      CmdCtrl = <div/>
    } else if (activityStatusEnum.q === status) {
      ExprCtrl = <QCtrl text={this.props.qText}/>;
      CmdCtrl = <AnswerCtrl
        submitBtnColor={this.props.color}
        submitAnswer={(a) =>
          {this.props.answer(a);}
        }
      />
    } else if (activityStatusEnum.answerOk === status) {
      ExprCtrl = <ACtrl text={this.props.qText}/>;
      CmdCtrl = <NextQCtrl
        btnColor={this.props.color}
      />
    }

    return (
      <div className={classItems.join(' ')}>
        <div className="w3-round-xlarge" style={style}>
          {ExprCtrl}
          {CmdCtrl}
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