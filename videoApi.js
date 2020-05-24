const axios = require('axios')
require('dotenv').config();
// Models declarations
const Videos = require("./models/videos");


// const URL = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=UUOD7OMAr2-yEhrk2iX9cU6w&key=AIzaSyCi_U7_eRbNh2RhAZnLwcn3hEudfdRL99E&part=snippet&maxResults=50`
    
 
function getUrl(pagetoken) {
     var pt = (typeof pagetoken === "undefined") ? "" :`&pageToken=${pagetoken}`,
     playListID = "UUOD7OMAr2-yEhrk2iX9cU6w",
     API_KEY = process.env.API_KEY,
     URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playListID}&key=${API_KEY}${pt}`;
  return URL;
}


function apiCall(npt) {
  axios.get(getUrl(npt))
  .then(response => {
   console.log(response.data.items)

   

Videos.insertMany(response.data.items)
.then(data => console.log(data))
.catch(err => console.log(err))
    
      return response.data;
  })
  .then(function(response) {
      if(response.error){
        console.log(response.error)
      } else {
        responseHandler(response)
      }

  });
}

function responseHandler(response){
  if(response.nextPageToken)
    apiCall(response.nextPageToken); 
}





module.exports = apiCall;