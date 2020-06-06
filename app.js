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
const User          = require('./models/user');

mongoose
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true,useUnifiedTopology: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  



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
  secret: process.env.SECRET,
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

app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/index.html");
});

module.exports = app;
