import React, { Component } from 'react';
import {operationKindEnum} from './model/QandA';
import QandA from './model/QandA';
import {routeEnum} from './util/navHelper';
import {
  generateQuestionAction,
  hasAnswerAction,
  getNextQuestionAction,
  retryQuestionAction,
  showAnswerAction} from './actions';
import activityStatusEnum from './view/activityArea/activityStatusEnum';
import fetch from 'cross-fetch';
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

    this.expressionReceived = this.expressionReceived.bind(this);
    this.solutionReceived = this.solutionReceived.bind(this);
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

  handleAnswer(dispatch, answer) {
    window.fetch(`/a/${op2ApiRoute(this.model.op)}`, {  //cross-fetch BUG: application/json is sent as plain/text
      method: 'POST',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({leftOperand: this.model.leftOprnd, rightOperand: this.model.rightOprnd, answer: answer}),
    })
    .then(res => res.json())
    .then(json => {
      this.solutionReceived(dispatch, json);
    })
    .catch(error => console.error('Error:', error));
  }

  handleNextQ(dispatch) {
    const nextModelObj = new QandA(this.model.op);
    this.model = nextModelObj;

    dispatch(getNextQuestionAction());
  }

  handleReceiveExpression(dispatch) {
    let nextModelObj = new QandA(this.model.op);
    fetch(`/q/${op2ApiRoute(this.model.op)}`)
    .then(response => response.json())
    .then(
      json => {
        this.expressionReceived(dispatch, nextModelObj, json);
      },
      (error) => {
        console.log("Error: " + error); //Todo: render the UI with a message
      }
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

    if (answerOk) {
      const aComps = [
        expressionBuilder(this.model),
        '=',
        this.model.expectedResult
      ];

      dispatch(hasAnswerAction(activityStatusEnum.answerOk, aComps.join(' ')));
    } else {
      const aComps = [
        expressionBuilder(this.model),
        '= ?'
      ];

      dispatch(hasAnswerAction(activityStatusEnum.answerWrong, aComps.join(' ')));
    }
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
