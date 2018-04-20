import React, { Component } from 'react';
import {operationKindEnum} from './model/QandA';
import QandA from './model/QandA';
import {routeEnum} from './util/navHelper';
import {
  generateQuestionAction,
  hasAnswerAction,
  getNextQuestionAction,
  retryQuestionAction,
  showAnswerAction,
  fireErrorAction,
  hideErrorAction} from './actions';
import activityStatusEnum from './view/activityArea/activityStatusEnum';
import {fetchJsonGet, fetchJsonPostWithResult} from './util/fetchLib';
import AppView from './view/AppView';
import PropTypes from 'prop-types';


const route2Op = (route) => {
  let rv = operationKindEnum.noOp;

  if (route){
    const tmpRoute = route.toUpperCase();
    if (routeEnum.add === tmpRoute) {
      rv = operationKindEnum.add;
    } else if (routeEnum.sub === tmpRoute) {
      rv = operationKindEnum.sub;
    } else if (routeEnum.mult === tmpRoute) {
      rv = operationKindEnum.mult;
    } else if (routeEnum.div === tmpRoute) {
      rv = operationKindEnum.div;
    }
  }

  return rv;
};

const op2ApiRoute = (op) => {
  let rv = 'add';

  if (operationKindEnum.add === op) {
    rv = 'add';
  } else if (operationKindEnum.sub === op) {
    rv = 'substract';
  } else if (operationKindEnum.mult === op) {
    rv = 'multiply';
  } else if (operationKindEnum.div === op) {
    rv = 'divide';
  }

  return rv;
};

//We have the model object as parameter instead of this.state.model
//because at times of call to this function, the state wasn't refreshed yet.
const expressionBuilder = (model) => {
  const exprComps = [
    model.leftOprnd,
    getOperationSymbol(model.op),
    model.rightOprnd,
  ];

  return exprComps.join(' ');
}

const getOperationSymbol = (operation) => {
  let rv = '';

  if (operationKindEnum.add === operation) {
    rv = '+';
  } else if (operationKindEnum.sub === operation) {
    rv = '-';
  } else if (operationKindEnum.mult === operation) {
    rv = 'x';
  } else if (operationKindEnum.div === operation) {
    rv = '\u00F7';
  }

  return rv;
};

class Controller extends Component {
  constructor(props) {
    super(props);

    this.model = new QandA(operationKindEnum.noOp);

    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleNextQ = this.handleNextQ.bind(this);
    this.handleReceiveExpression = this.handleReceiveExpression.bind(this);
    this.handleRetry = this.handleRetry.bind(this);
    this.handleRouteChanged = this.handleRouteChanged.bind(this);
    this.handleShowAnswer = this.handleShowAnswer.bind(this);
    this.handleHideError = this.handleHideError.bind(this);

    this.expressionReceived = this.expressionReceived.bind(this);
    this.expressionRequsetError = this.expressionRequsetError.bind(this);
    this.solutionReceived = this.solutionReceived.bind(this);
    this.solutionRequsetError = this.solutionRequsetError.bind(this);
  }

  expressionReceived(dispatch, model, data) {
    model.setExpression(data.left, data.right);
    this.model = model;

    const qComps = [
      this.model.leftOprnd,
      getOperationSymbol(this.model.op),
      this.model.rightOprnd,
      '= ?'
    ];
    dispatch(generateQuestionAction(activityStatusEnum.q, qComps.join(' ')));
  }

  expressionRequsetError(dispatch, errorExcp) {
    //The advise in the error message is en experiment, not very useful ...
    dispatch(fireErrorAction("טעינת תרגיל נכשלה, נסה/י לרענן את הדף", errorExcp.message))
  }

  handleAnswer(dispatch, answer) {
    const aUrl = `/a/${op2ApiRoute(this.model.op)}`;
    const data = {
      leftOperand: this.model.leftOprnd,
      rightOperand: this.model.rightOprnd,
      answer: answer};

    fetchJsonPostWithResult(
      aUrl,
      data,
      (result) => { this.solutionReceived(dispatch, result); },
      (error) => { this.solutionRequsetError(dispatch, error); }
    );
  }

  handleHideError(dispatch) {
    dispatch(hideErrorAction());
  }

  handleNextQ(dispatch) {
    const nextModelObj = new QandA(this.model.op);
    this.model = nextModelObj;

    dispatch(getNextQuestionAction());
  }

  handleReceiveExpression(dispatch) {
    let nextModelObj = new QandA(this.model.op);

    fetchJsonGet(
      `/q/${op2ApiRoute(this.model.op)}`,
      (result) => { this.expressionReceived(dispatch, nextModelObj, result); },
      (error) => { this.expressionRequsetError(dispatch, error); }
    );
  }

  handleRetry(dispatch) {
    const qComps = [
      this.model.leftOprnd,
      getOperationSymbol(this.model.op),
      this.model.rightOprnd,
      '= ?'
    ];
    dispatch(retryQuestionAction(activityStatusEnum.q, qComps.join(' ')));
  }

  handleShowAnswer(dispatch) {
    const aComps = [
      expressionBuilder(this.model),
      '=',
      this.model.expectedResult
    ];

    dispatch(showAnswerAction(activityStatusEnum.answerShow, aComps.join(' ')));
  }

  handleRouteChanged(option) {
    this.model = new QandA(route2Op(option));
    this.props.store.dispatch(getNextQuestionAction());
  }

  solutionReceived(dispatch, data) {
    this.model.expectedResult = data.solution;
    const answerOk = data.correct;
    let aComps = [];

    if (answerOk) {
      aComps = [
        expressionBuilder(this.model),
        '=',
        this.model.expectedResult
      ];
    } else {
      aComps = [
        expressionBuilder(this.model),
        '= ?'
      ];
    }

    dispatch(hasAnswerAction(
      answerOk ?
      activityStatusEnum.answerOk: activityStatusEnum.answerWrong,
      aComps.join(' '))
    );
  }

  solutionRequsetError(dispatch, errorExcp) {
    dispatch(fireErrorAction("שגיאה בבדיקת פתרון התרגיל", errorExcp.message))
  }

  componentDidMount() {
    this.setState({
      model: new QandA(route2Op(this.props.route))
    });
  }

  render() {
    const handlers = {
      answer: this.handleAnswer,
      nextQ: this.handleNextQ,
      receiveExpression: this.handleReceiveExpression,
      retry: this.handleRetry,
      showAnswer: this.handleShowAnswer,
      hideError: this.handleHideError,
    };

    return (
      <AppView onRouteChange={this.handleRouteChanged} eventHandlers={handlers}/>
    );
  }
}

Controller.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Controller;
