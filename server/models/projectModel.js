const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        startDate:{
            type:Date,
            required:true
        },
        endDate:{
            type:Date,
            required:true
        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            required:true
        },
        projectID:{
            type:String,
            required:true
        },
        invites:{
            type:Array
        },
        members:[{
            type:mongoose.Schema.Types.ObjectId
        }]
    }
)

const Projects = mongoose.model("Projects",projectSchema)

module.exports = {Projects}