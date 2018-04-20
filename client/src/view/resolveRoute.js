import {routeEnum, getActivityColor} from '../util/navHelper';
import Home from './activityArea/Home';
import Activity from './activityArea/Activity';
import React from 'react';

function resolveRoute(route, props) {
  let rv = null;

  const activityColor = getActivityColor(route);
  const activity = route ? route.toUpperCase() : routeEnum.home;

  if (routeEnum.home === activity) {
    rv = <Home key={'HOME'} />
  } else {
    rv = <Activity
      key={activity}
      color={activityColor}
      onNextQ={props.eventHandlers.receiveExpression}
      onAnswer={props.eventHandlers.answer}
      onPlay={props.eventHandlers.nextQ}
      onRetry={props.eventHandlers.retry}
      onShowAnswer={props.eventHandlers.showAnswer}
      onHideError={props.eventHandlers.hideError}
    />
  }

  return rv;
}

export default resolveRoute;
