const mongoose=require('mongoose');
require('dotenv').config();
const analyticsSchema= new mongoose.Schema({  
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    dailyFocusScore: {
        type: [Number],
        default: 0,
    },
    dailyDistractions: {
        type: Number,
    },
    weeklyStats: {
        focusScores: [Number],
        distractions: [Number],
    },
},{timestamps:true});
const Analytics=mongoose.model('Analytics',analyticsSchema);
module.exports=Analytics;