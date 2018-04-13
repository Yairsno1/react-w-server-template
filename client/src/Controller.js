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
//import fetch from 'cross-fetch';
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
  }

  handleAnswer(dispatch, answer) {
    //-------------------------------------------
    //AJAX mock
    //Remove after AJAX call will be implemented.
    setTimeout(() => {
        let nextModelObj;
        let answerOk;

        nextModelObj = this.model.clone();
        nextModelObj.result = answer;
        answerOk = nextModelObj.isCorrectResult();

        this.model = nextModelObj;

        if (answerOk) {
          const aComps = [
            expressionBuilder(this.model),
            '=',
            answer
          ];

          dispatch(hasAnswerAction(activityStatusEnum.answerOk, aComps.join(' ')));
        } else {
          const aComps = [
            expressionBuilder(this.model),
            '= ?'
          ];

          dispatch(hasAnswerAction(activityStatusEnum.answerWrong, aComps.join(' ')));
        }
      },
      1000
    );
    //-------------------------------------------
  }

  handleNextQ(dispatch) {
    const nextModelObj = new QandA(this.model.op);
    this.model = nextModelObj;

    dispatch(getNextQuestionAction());
  }

  handleReceiveExpression(dispatch) {
    //-------------------------------------------
    //AJAX mock
    //Remove after AJAX call will be implemented.
    setTimeout(() => {
        let nextModelObj = new QandA(this.model.op);
        nextModelObj.genExprMock(nextModelObj.op);
        this.model = nextModelObj;

        const qComps = [
          this.model.leftOprnd,
          getOperationSymbol(this.model.op),
          this.model.rightOprnd,
          '= ?'
        ];
        dispatch(generateQuestionAction(activityStatusEnum.q, qComps.join(' ')));
      },
      2000
    );
    //-------------------------------------------
    // fetch('/ping')
    //   .then(response => null)
    //   .then(json => {
    //       //console.log('');
    //     },
    //     (error) => {
    //       console.log("Error: " + error);
    //     }
    //   );

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

  componentDidMount() {
    this.setState({
      model: new QandA(route2Op(this.props.route))
    });
  }

  render() {
    const handlers = {
      answer: this.handleAnswer,
      nextQ: this.handleNextQ,
      routeChanged: this.handleRouteChanged,
      receiveExpression: this.handleReceiveExpression,
      retry: this.handleRetry,
      showAnswer: this.handleShowAnswer,
    };

    return (
      <AppView eventHandlers={handlers}/>
    );
  }
}

Controller.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Controller;
