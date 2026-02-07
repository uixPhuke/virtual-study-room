const mongoose=require('mongoose');
require('dotenv').config();
const resourceSchema= new mongoose.Schema({
    roomId: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    url: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    type:{
        type:String,
    },
},{timestamps:true});
const Resource=mongoose.model('Resource',resourceSchema);
module.exports=Resource;