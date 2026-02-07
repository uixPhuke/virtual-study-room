
const mongoose=require('mongoose');
require('dotenv').config();
const roomSchema= new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
},{timestamps:true});
const Room=mongoose.model('Room',roomSchema);
module.exports=Room;