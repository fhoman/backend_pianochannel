const express = require('express');
const userRoutes  = express.Router();
const Videos = require("../../models/video");
const User = require("../../models/user");


// Get the profile of a student
userRoutes.post('/profile-student',(req,res,next) => {
    console.log('body',req.body.username)
    User.find({username:req.body.username}).populate('videos')
    .then(user => {
        console.log('user',user)
        res.json(user)        
    })
    .catch(err => console.log(err))
        })












module.exports = userRoutes