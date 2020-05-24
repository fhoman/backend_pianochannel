
const express = require('express');
const adminRoutes  = express.Router();
const updateVideos = require('../../updateVideos')
const Videos = require("../../models/videos");

adminRoutes.get('/updatevideos',(req,res,next) => {
console.log('video page')
updateVideos()

Videos.find()
.then(response => {
    res.json(response);

} )
  
})

module.exports = adminRoutes