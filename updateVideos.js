const axios = require('axios')
require('dotenv').config();
// Models declarations
const Videos = require("./models/video");

// 
 
const getUrl = (pagetoken) => {
     var pt = (typeof pagetoken === "undefined") ? "" :`&pageToken=${pagetoken}`,
     playListID = "UUOD7OMAr2-yEhrk2iX9cU6w",
     API_KEY = process.env.API_KEY,
     URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playListID}&key=${API_KEY}${pt}`;
  return URL;
}

// Check if there are new videos in the YouTube Channel
const updateVideos = (npt) => {
  axios.get(getUrl(npt))
  .then(response => {  
response.data.items.forEach(element => {
Videos.findOne({ id: element.id })
  .then(video => {
    if (video !== null) {
          return;
    }

// Add the new videos to the database
Videos.create(element)  
.then(response => console.log(response))
.catch(err => console.log(err))    
})
})
return response.data;
})
.then((response) => {
    if(response.error){
        console.log(response.error)
      } else {
        responseHandler(response)
      }
  });
}

const responseHandler = (response) => {
  if(response.nextPageToken)
  updateVideos(response.nextPageToken); 
}




module.exports = updateVideos;