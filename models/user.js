const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    name:String,
    surname:String,
    emailnotifications: {
      type:Boolean,
      default:true},
    whatsappnotifications: {
     type:Boolean,
     default:false
    },
    image:{
      type:String,
      default:'https://www.pianolessenamsterdam.nl/wp-content/uploads/2017/08/PianolessenAmsterdam.png' 
    },
    bio: {type:String,default:'No bio yet'},
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: 'USER'
    },           
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