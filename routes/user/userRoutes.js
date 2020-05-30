const express = require('express');
const userRoutes  = express.Router();
const Videos = require("../../models/video");
const User = require("../../models/user");


userRoutes.post('/videos-student',(req,res,next) => {
console.log(req.body)
    User.find({username:req.body.UserID}).populate('videos')
    .then(user => {
        console.log('user',user)
        res.json(user)        
    })
    .catch(err => console.log(err))
    })











module.exports = userRoutes