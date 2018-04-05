import {routeEnum} from '../util/navHelper';
import Home from './activityArea/Home';
import Activity from './activityArea/Activity';
import React from 'react';

function resolveRoute(route, props) {
  let rv = null;
  let activityColor = "";

  const activity = route ? route.toUpperCase() : routeEnum.home;
  if (routeEnum.add === activity) {
    activityColor = "green";
  } else if (routeEnum.sub === activity) {
    activityColor = "deep-orange";
  } else if (routeEnum.mult === activity) {
    activityColor = "blue";
  }  else if (routeEnum.div === activity) {
    activityColor = "yellow";
  }

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
    />
  }

  return rv;
}

export default resolveRoute;
