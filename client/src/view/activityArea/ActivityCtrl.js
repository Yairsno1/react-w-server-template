import React, {Component} from 'react';
import activityStatusEnum from './activityStatusEnum';
import {WaitCtrl, QCtrl, ACtrl} from './exprCtrl';
import AnswerCtrl from './AnswerCtrl';
import NextQCtrl from './NextQCtrl';
import WrongCtrl from './WrongCtrl';
import PropTypes from 'prop-types';
import welcome from '../../images/welcome.png'
import ErrorFloater from '../error/ErrorFloater';

class ActivityCtrl extends Component {

  render() {
    const classItems = [
      'w3-display-middle',
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
      ExprCtrl = <WaitCtrl receiveQ={this.props.nextQ}/>;
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
        nextQ={() =>
          {this.props.play();}
        }
      />
    } else if (activityStatusEnum.answerWrong === status) {
      ExprCtrl = <QCtrl text={this.props.qText}/>;
      CmdCtrl = <WrongCtrl
        btnColor={this.props.color}
        retry={() =>
          {this.props.retry();}
        }
        showA={() =>
          {this.props.showAnswer();}
        }
      />
    } else if (activityStatusEnum.answerShow === status) {
      ExprCtrl = <QCtrl text={this.props.qText}/>;
      CmdCtrl = <NextQCtrl
        btnColor={this.props.color}
        nextQ={() =>
          {this.props.play();}
        }
      />
    }

    return (
      <div>
        <img src={welcome} alt="background" className="w3-opacity" style={{width: "100%",}}/>
        <div className={classItems.join(' ')}  style={{width: "50%",}}>
          <div className="w3-round-xlarge" style={style}>
            {ExprCtrl}
            {CmdCtrl}
          </div>
        </div>
        {(this.props.error && this.props.errorVisible) ? <ErrorFloater hideError={this.props.hideError}/> : null}
      </div>
    );
  }
}

ActivityCtrl.propTypes = {
  color: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  errorVisible: PropTypes.bool.isRequired,
  nextQ: PropTypes.func.isRequired,
  answer: PropTypes.func.isRequired,
  play: PropTypes.func.isRequired,
  hideError: PropTypes.func.isRequired,
};

export default ActivityCtrl;
