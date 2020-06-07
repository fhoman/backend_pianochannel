const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    name:String,
    surname:String,
    image:{
      type:String,
      default:'https://www.pianolessenamsterdam.nl/wp-content/uploads/2017/12/Piano-leren-spelen.jpg' 
    },
    bio: {type:String,default:'No bio yet'},
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: 'USER'
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