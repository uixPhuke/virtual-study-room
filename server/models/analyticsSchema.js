const mongoose=require('mongoose');


const analyticsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  totalStudyTime: { type: Number, default: 0 }, // minutes
  totalSessions: { type: Number, default: 0 },
  lastActive: Date
}, { timestamps: true });



const Analytics=mongoose.model('Analytics',analyticsSchema);
module.exports=Analytics;