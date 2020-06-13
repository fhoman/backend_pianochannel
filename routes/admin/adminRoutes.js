const express = require('express');
const adminRoutes  = express.Router();
const updateVideos = require('../../updateVideos')
const Videos = require("../../models/video");
const User = require("../../models/user");
const mailNewUser = require("../../mailservices/mailNewUser")
const mailNewVideo = require("../../mailservices/mailNewVideo")
const whatsAppUser = require("../../mailservices/whatsappVideo")


// Invite a new user by administrator and send a e-mail with link for signup

adminRoutes.post('/mail-user', (req, res, next) => {   
  console.log(req.body.email)
  mailNewUser(req.body.email)    
  });

// Update the list with YouTube videos in the database

adminRoutes.get('/updatevideos',(req,res,next) => {
updateVideos()
Videos.find()
.then(response => {
    res.json(response);
} )
  
})
// Show all students in the admin view

adminRoutes.post('/students',(req,res,next) => {
  User.find()
  .then(user => res.json(user))
  .catch(err => console.log(err))
  }) 

// Show all videos in the admin view

adminRoutes.post('/videos',(req,res,next) => {
Videos.find().populate('users')
.then(videos => res.json(videos))
.catch(err => console.log(err))
})

// Show all students that not already tagged for a video in the admin view

adminRoutes.post('/students-video',(req,res,next) => {
Videos.findById(req.body.videoID)
.then(video => {  
  User.find({
    $and: [{ _id: {$nin: video.users} } ]
        })     
.then(users => { res.json(users)    
  }) 
})
.catch(err => console.log(err))
  }) 

// Get a video in the admin view

adminRoutes.post('/video',(req,res,next) => { 
  Videos.findById(req.body.videoID).populate("users")
  .then(video => res.json(video))
  .catch(err => console.log(err))
  })

// Tag a selected video and add it to a user video array and a video user array
adminRoutes.post('/tagvideo',(req,res,next) => {
  console.log(req.body)
const {videoID,username} = req.body

User.find({username})
.then(userID => {  
   console.log(userID)
const userUpdate = User.findOneAndUpdate(
    { username },
    { $addToSet: { videos:videoID } },{useFindAndModify:false,returnNewDocument:true}) 
const videoUpdate = Videos.findOneAndUpdate(
  { _id:videoID },
  { $addToSet: { users:userID[0]._id } },{useFindAndModify:false,returnNewDocument:true}) 
  Promise.all([userUpdate, videoUpdate]).then((values) => {
    res.json('A user was tagged')
  })
  .catch(err => console.log(err))
  ;
})   
})

    
// Tag a selected video and delete it from the user video array
adminRoutes.post('/untagvideo',(req,res,next) => {
  console.log(req.body)
    const {videoID,username} = req.body   

User.find({username})
.then(userID => {  

const userDelete =  User.findOneAndUpdate(
      { username },
      { $pull: { videos:videoID } },{useFindAndModify:false,returnNewDocument:true})
 
const videoDelete = Videos.findOneAndUpdate(
      { _id:videoID },
      { $pull: { users:userID[0]._id } },{useFindAndModify:false,returnNewDocument:true}) 
      
Promise.all([userDelete, videoDelete]).then((values) => {
        res.json('A user was untagged')
      })
      .catch(err => console.log(err))


    })
  })   



// Send notifications to student(s) after they are tagged on a video

adminRoutes.post('/send-notification',(req,res,next) => { 
  const {taggedStudentsArr,videoID} = req.body
// Get array with ID's students and ID video
taggedStudentsArr.forEach(element => {
User.find({username:element})
.then(user => {
  if (user[0].emailnotifications) {
      mailNewVideo(user[0],videoID)
  }
  if (user[0].whatsappnotifications){
      whatsAppUser(user[0],videoID)
  }
}
  )
.catch(err => console.log(err))
  
});

// Loop over array and send them a e-mail if notification is true


// Trigger email function for every student and pass the email, the Video details and the profile page


  })



module.exports = adminRoutes