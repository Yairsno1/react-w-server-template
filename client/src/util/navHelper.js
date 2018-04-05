export const routeEnum = {
  home: '',
  add: 'ADD',
  sub: 'SUBSTRACT',
  mult: 'MULTIPLY',
  div: 'DIVIDE',
}

export function getActivityColor(route) {
  let rv = '';

  const activity = route ? route.toUpperCase() : routeEnum.home;
  if (routeEnum.add === activity) {
    rv = "green";
  } else if (routeEnum.sub === activity) {
    rv = "deep-orange";
  } else if (routeEnum.mult === activity) {
    rv = "blue";
  }  else if (routeEnum.div === activity) {
    rv = "yellow";
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
