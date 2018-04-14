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
    this.result = NaN;
    this.expectedResult = NaN;
  }

  clone() {
    let rv = new QandA(this.op);
    rv.leftOprnd = this.leftOprnd;
    rv.rightOprnd = this.rightOprnd;
    rv.result = this.result;
    rv.expectedResult = this.expectedResult;

    return rv;
  }

  setExpression(leftOperand, rightOperand) {
    this.leftOprnd = leftOperand;
    this.rightOprnd = rightOperand;

    if (operationKindEnum.add === this.op) {
      this.expectedResult = this.leftOprnd + this.rightOprnd;
    } else if (operationKindEnum.sub === this.op) {
      this.expectedResult = this.leftOprnd - this.rightOprnd;
    } else if (operationKindEnum.mult === this.op) {
      this.expectedResult = this.leftOprnd * this.rightOprnd;
    } else if (operationKindEnum.div === this.op) {
      this.expectedResult = Math.floor(this.leftOprnd / this.rightOprnd);
    }
  }

  isCorrectResult() {
    return (this.expectedResult === this.result);
  }

}

export default QandA;
