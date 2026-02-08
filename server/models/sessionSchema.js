const mongoose=require('mongoose');


const sessionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  room: { type: mongoose.Schema.Types.ObjectId, ref: "Room" },
  startTime: Date,
  endTime: Date,
  duration: Number // in minutes
}, { timestamps: true });



module.exports=mongoose.model('Session',sessionSchema);
