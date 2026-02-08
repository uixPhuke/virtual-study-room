const mongoose=require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ["pdf", "link", "video", "note"], required: true },
  url: String,
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  room: { type: mongoose.Schema.Types.ObjectId, ref: "Room" }
}, { timestamps: true });


const Resource=mongoose.model('Resource',resourceSchema);
module.exports=Resource;