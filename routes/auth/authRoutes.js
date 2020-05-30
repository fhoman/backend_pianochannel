const express = require('express');
const authRoutes  = express.Router();
const passport = require('passport');
const User = require('../../models/user');


// Bcrypt to encrypt passwords
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

authRoutes.post('/login', (req, res, next) => {
  console.log(req.body.username)
  
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
      return res.status(200).json({ message: 'User logged' });
    });
  })(req, res, next);
});

authRoutes.get('/loggedin', (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).json({ message: 'User logged~' });
    return;
  }
  res.status(403).json({ message: 'please authenticate' });
});

authRoutes.post('/signup', (req, res, next) => {

  const { username, password, number } = req.body;
  
  console.log('user details',req.body);
  if (!username || !password) {
    res.status(401).json({ message: 'Indicate username and password' });
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
      password: hashPass      
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

// Facebook login routes

authRoutes.post("/facebook", passport.authenticate("facebook"),(req,res,next) =>{

console.log(req.body)

});


authRoutes.post("/facebook/callback",
    passport.authenticate("facebook"),
    (req, res) => {
        res.redirect("/profile");
    });


//authRoutes.route('/auth/google')
//    .post(passport.authenticate('google-token', {session: false}), function(req, res, next) {
//        if (!req.user) {
//            return res.send(401, 'User Not Authenticated');
//        }
 //       req.auth = {
 //           id: req.user.id
//        };
//
//        next();
//    }, generateToken, sendToken);



authRoutes.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'OK' });
});





module.exports = authRoutes