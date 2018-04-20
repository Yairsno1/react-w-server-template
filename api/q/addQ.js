const addRouter = require('express').Router();
const createJson = require('./createQJson');

addRouter.get('/', (req, res) => {
  const left = Math.floor(Math.random() * 11);
  const right = Math.floor(Math.random() * 11);

  res.json(createJson(left, right));
});

module.exports = addRouter;
