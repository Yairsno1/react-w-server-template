let aRouter = require('express').Router();

const addRouter = require('./addA');
const substractRouter = require('./subA');
const multiplyRouter = require('./multA');
const divideRouter = require('./divA');

aRouter.use('/add',addRouter);
aRouter.use('/substract',substractRouter);
aRouter.use('/multiply',multiplyRouter);
aRouter.use('/divide',divideRouter);

module.exports = aRouter;
