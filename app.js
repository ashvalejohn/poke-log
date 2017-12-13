var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

const passport = require('passport');
const session = require('express-session');
var bodyParser = require('body-parser');

const models = require('./models/index');
require('./config/passport/passport')(passport, models.User);

models.sequelize.sync()
  .then(() => { console.log('DB connected! :)'); })
  .catch(() => { console.log('Something is wrong with DB!'); });

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public' , 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(session({ secret: "Cat pokes hurt the most.", resave: false, saveUninitialized: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

// serve static assets
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/', express.static(path.join(__dirname, 'public')));

// router
app.get('/', (req, res) => {
  let currentUser = null;
  if (req.user) {
    currentUser = require('./views/currentUser')(req.user);
  }
  res.render('index', { currentUser });
});
app.use('/api', require('./routes/api'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.sendStatus(err.status || 500);
});

module.exports = app;
