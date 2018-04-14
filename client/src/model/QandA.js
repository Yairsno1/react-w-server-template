export const operationKindEnum = {
  noOp: 0,
  add: 1,
  sub: 2,
  mult: 3,
  div: 4,
};

class QandA {
  constructor(operation) {
    this.leftOprnd = NaN;
    this.rightOprnd = NaN;
    this.op = operation;
    this.expectedResult = NaN;
  }

  clone() {
    let rv = new QandA(this.op);
    rv.leftOprnd = this.leftOprnd;
    rv.rightOprnd = this.rightOprnd;

    return rv;
  }

  setExpression(leftOperand, rightOperand) {
    this.leftOprnd = leftOperand;
    this.rightOprnd = rightOperand;
  }

}

export default QandA;
