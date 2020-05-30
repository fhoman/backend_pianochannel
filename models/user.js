const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    name:String,
    surname:String,
    facebookID: String,  
    role: {
      type: String,
      enum: ["USER", "ADMIN"]
    },     
    confirmed:false,
    number: { type: Number, required: false, default:null},  
    videos: [{ 
      type: Schema.ObjectId, 
      ref: 'Videos' }]
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });




const User = mongoose.model('User', userSchema);
module.exports = User;