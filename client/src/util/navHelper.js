export const routeEnum = {
  home: '',
  add: 'ADD',
  sub: 'SUBSTRACT',
  mult: 'MULTIPLY',
  div: 'DIVIDE',
}

export const routeColors = {
  home: 'white',
  add: 'green',
  sub: 'deep-orange',
  mult: 'blue',
  div: 'yellow',
};

export function getActivityColor(route) {
  let rv = routeColors.home;

  const activity = route ? route.toUpperCase() : routeEnum.home;
  if (routeEnum.add === activity) {
    rv = routeColors.add;
  } else if (routeEnum.sub === activity) {
    rv = routeColors.sub;
  } else if (routeEnum.mult === activity) {
    rv = routeColors.mult;
  }  else if (routeEnum.div === activity) {
    rv = routeColors.div;
  }

  return rv;
}

export function isLegalRoute(route) {
  let rv = false;

  const tmpRoute = (route || '').toUpperCase();
  rv = (tmpRoute === routeEnum.home ||
    tmpRoute === routeEnum.add ||
    tmpRoute === routeEnum.sub ||
    tmpRoute === routeEnum.mult ||
    tmpRoute === routeEnum.div);
  return rv;
}
