const qRouter = require('express').Router();

const addRouter = require('./addQ');
const substractRouter = require('./subQ');
const multiplyRouter = require('./multQ');
const divideRouter = require('./divQ');

qRouter.use('/add', addRouter);
qRouter.use('/substract', substractRouter);
qRouter.use('/multiply', multiplyRouter);
qRouter.use('/divide', divideRouter);

module.exports = qRouter;
