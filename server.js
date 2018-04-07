'use strict';
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

//var routes = require('./routes/index');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));

let homeRouter = express.Router();
/* GET home page. */
homeRouter.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); //res.render('index.html');
});

app.use('/', homeRouter);
app.get('/ping', function (req, res) {
  console.log('pong');
 });

 app.get('/api/add', (req, res) => {
   console.log(req.query);
   let success = false;
   let result = 0;
   if (Number(req.query.left) !== NaN && Number(req.query.right) !== NaN) {
     success = true;
     result = Number(req.query.left) + Number(req.query.right);
   }
   res.json({result: result, success: success});
 });

//app.use('/users', users);

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
