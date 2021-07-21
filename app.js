const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
require('./config/mongoose'); // MongoDB Connection

// Routers
const login = require('./routes/login');
const logout = require('./routes/logout');
const auth = require('./routes/auth');
const public = require('./routes/public');

// Authorization MiddleWare
const checkToken = require('./middleware/verify_token');

const app = express();

// MiddleWares
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.use(
  session({
    secret: process.env.ACCESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use('/login', login);
app.use('/logout', logout);
app.use('/public', public);
app.use('/auth', checkToken, auth);

module.exports = app;
