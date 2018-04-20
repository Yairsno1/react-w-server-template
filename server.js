'use strict';

const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

//var routes = require('./routes/index');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let homeRouter = express.Router();
let qRouter = require('./api/q/q');
let aRouter = require('./api/a/a');

/* GET home page. */
homeRouter.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); //res.render('index.html');
});

app.use('/', homeRouter);
app.use('/q', qRouter);
app.use('/a', aRouter);


// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });


const PORT = process.env.PORT || 8080;
app.set('port', PORT);

const server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});
