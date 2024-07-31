require('dotenv').config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer = require('multer');
var discordRouter = require('./routes/discord');
var { normalizePort } = require('./utils');

var app = express();

var port = normalizePort(process.env.PORT || '3000');

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', port);

app.use('/mj', discordRouter);

module.exports = app;
