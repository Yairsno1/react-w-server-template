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
  }

  genExprMock(operation) {
    if (operationKindEnum.add === operation) {
      this.genAddExprMock();
    } else if (operationKindEnum.sub === operation) {
      this.genAddExprMock();
    } else if (operationKindEnum.mult === operation) {
      this.genMultExprMock();
    } else if (operationKindEnum.div === operation) {
      this.genDivExprMock();
    }
  }

  genAddExprMock() {
    this.leftOprnd = Math.floor(Math.random() * 11);
    this.rightOprnd = Math.floor(Math.random() * 11);
  }

  genSubExprMock() {
    this.leftOprnd = Math.floor(Math.random() * 21);
    this.rightOprnd = Math.floor(Math.random() * (this.leftOprnd-1)); //right <= left
  }

  genMultExprMock() {
    this.leftOprnd = 1 + Math.floor(Math.random() * 10);
    this.rightOprnd = 1 + Math.floor(Math.random() * 10);
  }

  genDivExprMock() {
    const l = 1 + Math.floor(Math.random() * 10);
    const r = 1 + Math.floor(Math.random() * 10);

    this.leftOprnd = l * r;
    this.rightOprnd = r;
  }

}

export default QandA;
