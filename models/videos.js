const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Users Schema
const VideoSchema = new Schema(

  {
    
      kind: String,
      etag: String,
      id: String,
      snippet: {
        publishedAt: String,
        channelId: String,
        title: String,
        description: String,
        thumbnails: {
          default: {
            url: String,
            width: Number,
            height: Number
          },
          medium: {
            url: String,
            width: Number,
            height: Number
          },
          high: {
            url: String,
            width: Number,
            height: Number
          },
          standard: {
            url: String,
            width: Number,
            height: Number
          },
          maxres: {
            url: String,
            width: Number,
            height: Number
          }
        },
        channelTitle: String,
        playlistId: String,
        position: Number,
        resourceId: {
          kind: String,
          videoId: String
        }
      }
    }
  
  
);

const Videos = mongoose.model("Videos", VideoSchema);
module.exports = Videos;
