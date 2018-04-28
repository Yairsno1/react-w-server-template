import {isLegalRoute} from '../util/navHelper';

///
function test_isLegalRoute_home() {
  const actualLegalRoute = isLegalRoute('');

  expect(actualLegalRoute).toBe(true);
}
test(
  '"" is legal page url',
  test_isLegalRoute_home
);

///
function test_isLegalRoute_home_undefined() {
  const actualLegalRoute = isLegalRoute(undefined);

  expect(actualLegalRoute).toBeTruthy();
}
test(
  'undefined value is legal page url',
  test_isLegalRoute_home_undefined
);

///
function test_isLegalRoute_Add() {
  const actualLegalRoute = isLegalRoute('aDD');

  expect(actualLegalRoute).toBe(true);
}
test(
  'Add is legal page url',
  test_isLegalRoute_Add
);

///
function test_isLegalRoute_Sub() {
  const actualLegalRoute = isLegalRoute('substract');

  expect(actualLegalRoute).toBe(true);
}
test(
  'Substract is legal page url',
  test_isLegalRoute_Sub
);

///
function test_isLegalRoute_Mult() {
  const actualLegalRoute = isLegalRoute('multiplY');

  expect(actualLegalRoute).toBe(true);
}
test(
  'Multiply is legal page url',
  test_isLegalRoute_Mult
);

///
function test_isLegalRoute_Div() {
  const actualLegalRoute = isLegalRoute('Divide');

  expect(actualLegalRoute).toEqual(true);
}
test(
  'Divide is legal page url',
  test_isLegalRoute_Div
);

///
function test_isLegalRoute_illegal() {
  const actualLegalRoute = isLegalRoute('ad');

  expect(actualLegalRoute).toBe(false);
}
//We can't test all the illegal urls of course,
//here we want to test false return value on some illegal url
it(
  'Some illegal page url',
  test_isLegalRoute_illegal
);
