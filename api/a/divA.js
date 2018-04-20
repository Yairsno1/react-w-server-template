const divideRouter = require('express').Router();
const createJson = require('./createAJson');

divideRouter.post('/', (req, res) => {
  const answer = req.body.answer;
  const solution = Math.floor(req.body.leftOperand / req.body.rightOperand);
  res.json(createJson(answer, solution));
});

module.exports = divideRouter;
