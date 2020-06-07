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


userRoutes.post('/update-profile-student',(req,res,next) => {
            
    const {username,name,surname,number,bio} = req.body
    console.log('body',req.body)

    User.updateOne({username},{name,surname,bio,number})
    .then(response => console.log(response))
    .catch(err => console.log(err))
            
                })

       







module.exports = userRoutes