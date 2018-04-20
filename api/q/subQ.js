const substractRouter = require('express').Router();
const createJson = require('./createQJson');

substractRouter.get('/', (req, res) => {
  const left = Math.floor(Math.random() * 21);
  const right = Math.floor(Math.random() * (left+1)); //right <= left

  res.json(createJson(left, right));
});

module.exports = substractRouter;
