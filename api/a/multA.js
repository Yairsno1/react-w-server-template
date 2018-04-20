const multiplyRouter = require('express').Router();
const createJson = require('./createAJson');

multiplyRouter.post('/', (req, res) => {
  const answer = req.body.answer;
  const solution = req.body.leftOperand * req.body.rightOperand;
  res.json(createJson(answer, solution));
});

module.exports = multiplyRouter;
