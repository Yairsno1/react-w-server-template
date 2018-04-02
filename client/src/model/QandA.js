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

  genExprMock(operation) {
    if (operationKindEnum.add === operation) {
      this.genAddExprMock();
    } else if (operationKindEnum.sub === operation) {
      this.genSubExprMock();
    } else if (operationKindEnum.mult === operation) {
      this.genMultExprMock();
    } else if (operationKindEnum.div === operation) {
      this.genDivExprMock();
    }
  }

  isCorrectResult() {
    return (this.expectedResult === this.result);
  }


  genAddExprMock() {
    this.leftOprnd = Math.floor(Math.random() * 11);
    this.rightOprnd = Math.floor(Math.random() * 11);
    this.expectedResult = this.leftOprnd + this.rightOprnd;
  }

  genSubExprMock() {
    this.leftOprnd = Math.floor(Math.random() * 21);
    this.rightOprnd = Math.floor(Math.random() * (this.leftOprnd-1)); //right <= left
    this.expectedResult = this.leftOprnd - this.rightOprnd;
  }

  genMultExprMock() {
    this.leftOprnd = 1 + Math.floor(Math.random() * 10);
    this.rightOprnd = 1 + Math.floor(Math.random() * 10);
    this.expectedResult = this.leftOprnd * this.rightOprnd;
  }

  genDivExprMock() {
    const l = 1 + Math.floor(Math.random() * 10);
    const r = 1 + Math.floor(Math.random() * 10);

    this.leftOprnd = l * r;
    this.rightOprnd = r;
    this.expectedResult = l;
  }

}

export default QandA;
