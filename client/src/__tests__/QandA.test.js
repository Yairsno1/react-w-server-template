import QandA, {operationKindEnum} from '../model/QandA';

test ('.ctor' , () => {
  const expectedOp = operationKindEnum.mult;
  const expectedLeft = NaN;
  const expectedRight = NaN;
  const expectedExpectedResult = NaN;

  const qa = new QandA(expectedOp);
  const actualOp = qa.op;
  const actualLeft = qa.leftOprnd;
  const actualRight = qa.rightOprnd;
  const actualExpectedResult =qa.expectedResult;

  expect.assertions(4);
  expect(actualOp).toEqual(expectedOp);
  expect(actualLeft).toEqual(expectedLeft);
  expect(actualRight).toEqual(expectedRight);
  expect(actualExpectedResult).toEqual(expectedExpectedResult);
});

test ('setExpression' , () => {
  const expectedOp = operationKindEnum.div;
  const expectedLeft = 3;
  const expectedRight = 6;

  const qa = new QandA(expectedOp);
  qa.setExpression(expectedLeft, expectedRight);
  const actualOp = qa.op;  //Verify that setExpression(...) does not mutate the operation
  const actualLeft = qa.leftOprnd;
  const actualRight = qa.rightOprnd;

  expect.assertions(3);
  expect(actualOp).toEqual(expectedOp);
  expect(actualLeft).toEqual(expectedLeft);
  expect(actualRight).toEqual(expectedRight);
});

test ('clone' , () => {
  const expectedOp = operationKindEnum.add;
  const expectedLeft = 3;
  const expectedRight = 6;

  const qa = new QandA(expectedOp);
  qa.setExpression(expectedLeft, expectedRight);
  const copyOfQA = qa.clone();
  const actualOp = copyOfQA.op;
  const actualLeft = copyOfQA.leftOprnd;
  const actualRight = copyOfQA.rightOprnd;

  expect.assertions(3);
  expect(actualOp).toEqual(expectedOp);
  expect(actualLeft).toEqual(expectedLeft);
  expect(actualRight).toEqual(expectedRight);
});
