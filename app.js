require('dotenv').config();
const express      = require('express');
const path         = require('path');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');
const passport = require("passport");
const session      = require("express-session");
const cors         = require("cors");
const Mongostore   = require("connect-mongo")(session);
const flash      = require("connect-flash");
const FacebookStrategy = require('passport-facebook').Strategy;
const User          = require('../backend-pianochannel/models/user');

mongoose
  .connect('mongodb://localhost/backendPianoChannel', {useNewUrlParser: true,useUnifiedTopology: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  let user = {};

  passport.serializeUser((user, cb) => {
      cb(null, user);
  });
  
  passport.deserializeUser((user, cb) => {
      cb(null, user);
  });

// Facebook Strategy
passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: "/api/auth/facebook/callback"
},
(accessToken, refreshToken, profile, cb) => {
  
  user = { ...profile };
  return cb(null, profile);
}));


const app = express();
app.use(cors());
app.use(passport.initialize());




// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.session());

// Enable authentication using session + passport
app.use(session({
  secret: process.env.API_KEY,
  resave: true,
  saveUninitialized: true,
  store: new Mongostore( { mongooseConnection: mongoose.connection })
}))




const index = require('./routes/index');
app.use('/api/',index);

const authRouter = require('./routes/auth/authRoutes');
app.use('/api/auth',authRouter);

const adminRouter = require('./routes/admin/adminRoutes');
app.use('/api/admin',adminRouter);

const userRouter = require('./routes/user/userRoutes');
app.use('/api/profile',userRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('error mededeling');
});

module.exports = app;
