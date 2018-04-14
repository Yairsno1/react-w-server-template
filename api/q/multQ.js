const multiplyRouter = require('express').Router();
const createJson = require('./createQJson');

multiplyRouter.get('/', (req, res) => {
  const left = 1 + Math.floor(Math.random() * 10);
  const right = 1 + Math.floor(Math.random() * 10);

  res.json(createJson(left, right));
});

module.exports = multiplyRouter;
