var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors'); 

var indexRouter = require('./routes/index');
var statistiquesRouter = require('./routes/statistiques');
var boxeursRouter = require('./routes/boxeurs');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use('/', indexRouter);
app.use('/statistiques', statistiquesRouter);
app.use('/boxeurs', boxeursRouter);

module.exports = app;
