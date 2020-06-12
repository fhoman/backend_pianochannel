const express = require('express');
const authRoutes  = express.Router();
const passport = require('passport');
const User = require('../../models/user');


// Bcrypt to encrypt passwords
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

authRoutes.post('/login', (req, res, next) => {
  
  
  passport.authenticate('local', (err, user, next) => {    
    if (err) {      
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ error: 'user not authenticated' });
    }
    req.logIn(user, (err) => {
      if (err) {     
        return next(err);
      }
      return res.status(200).json(user);
    });
  })(req, res, next);

});

authRoutes.get('/isLoggedIn', (req, res) => {

  console.log('isloggendin route')
  if(req.isAuthenticated()) {
    console.log('line 35',req.user)
    User.findById(req.user)
    .then(response => {
      console.log(response)
      res.status(200).json(req.user)
    })   
    return
  }
  res.status(403).json({message: 'please authenticate'})
});

authRoutes.post('/signup', (req, res, next) => {
  const { username, password} = req.body;  
  console.log('user details',req.body);
  if (!username || !password ) {
    res.status(401).json({ message: 'Please fill in al the required fields' });
    return;
  }

  User.findOne({ username }, 'username', (err, user) => {
    if (user !== null) {
      res.status(409).json({ message: 'The username already exists' });
      //
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,  
    });

    newUser
      .save()
      .then((user) => {
        res.status(200).json({ message: 'User created' });
       
      })
      .catch((err) => {
        res.status(404).json({ message: 'Something went wrong' });
   
      });
  });
});





authRoutes.post('/logout', (req, res) => {
  console.log('logout')
  req.logout();
  res.status(200).json({ message: 'OK' });
});





module.exports = authRoutes