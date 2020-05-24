const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    campus: {
      type: String,
      enum: ["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "México"," Sao Paulo", "Lisbon"]
    },
    course: {
      type: String,
      enum: ["Web Dev", "UX/UI", "Data Analytics"]
    }, 
    name: { type: String, required: false, default:null},
    description: { type: String, required: false,default:null },
    imageUrl: { type: String, required: false,default:null },
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const User = mongoose.model('User', userSchema);
module.exports = User;