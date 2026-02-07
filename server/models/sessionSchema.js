const mongoose=require('mongoose');
require('dotenv').config();
const sessionSchema= new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',  
    },
    startTime: {
        type: Number,
        required: true,
    },
    endTime: {
        type: Number,
        required: true,
    },
    focusScore: {
        type: Number,
        default: 0,
    },
    scoreDelta: {
        type: Number,
        default: 0,
    },
    distractionsCount: {
        type: Number,
        default: 0,
    },
},{timestamps:true})
module.exports=mongoose.model('Session',sessionSchema);
