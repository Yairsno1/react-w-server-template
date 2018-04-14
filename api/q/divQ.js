const divideRouter = require('express').Router();
const createJson = require('./createQJson');

divideRouter.get('/', (req, res) => {
  const l = 1 + Math.floor(Math.random() * 10);
  const r = 1 + Math.floor(Math.random() * 10);

  const left = l * r;
  const right = r;

  res.json(createJson(left, right));
});

module.exports = divideRouter;
