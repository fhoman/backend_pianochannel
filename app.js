require('dotenv').config();
const express      = require('express');
const path         = require('path');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');
const session      = require("express-session");
const cors         = require("cors");
const Mongostore   = require("connect-mongo")(session);


mongoose
  .connect('mongodb://localhost/backendPianoChannel', {useNewUrlParser: true,useUnifiedTopology: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });



const app = express();

// Middleware Setup
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true
}))


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Enable authentication using session + passport
app.use(session({
  secret: process.env.API_KEY,
  resave: true,
  saveUninitialized: true,
  store: new Mongostore( { mongooseConnection: mongoose.connection })
}))

const index = require('./routes/index');
app.use('/',index);

const authRouter = require('./routes/auth/authRoutes');
app.use('/auth',authRouter);

const adminRouter = require('./routes/admin/adminRoutes');
app.use('/admin',adminRouter);

const userRouter = require('./routes/user/userRoutes');
app.use('/profile',userRouter);

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
  res.render('error');
});

module.exports = app;
