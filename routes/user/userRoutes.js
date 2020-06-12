const express = require('express');
const userRoutes  = express.Router();
const Videos = require("../../models/video");
const User = require("../../models/user");  
var cloudinary = require('cloudinary');  
// include CLOUDINARY:
const uploader = require('../../configs/cloudinary-setup');



// Get the profile of a student
userRoutes.post('/profile-student',(req,res,next) => {
    console.log('body',req.body.username)
    User.find({username:req.body.username}).populate({path:'videos',options:{ sort:{publishedAt : 1}}})
    .then(user => {
        console.log('user',user)
        res.json(user)        
    })
    .catch(err => console.log(err))
        })

// Update the profile of the student

userRoutes.post('/update-profile-student',(req,res,next) => {
            
    const {username,name,surname,number,bio} = req.body
    console.log('body',req.body)

    User.updateOne({username},{name,surname,bio,number})
    .then(response => console.log(response))
    .catch(err => console.log(err))
            
                })

       
// Edit the profile picture


userRoutes.post('/profileimage', uploader.single('image'), (req, res, next) => {

  
    User.findOneAndUpdate({username: req.body.username}, {image: req.file.path},{useFindAndModify:true,returnNewDocument:true})
      .then(document => {
      
        res.status(200).json(req.file.path)
      })
      .catch(e => {
        res.status(500).json({error: e})
      })
  })






module.exports = userRoutes