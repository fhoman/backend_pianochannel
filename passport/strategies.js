require('dotenv').config();
const passport      = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const User          = require('../models/user');


