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
            type:String,
            required:true
        },
        projectID:{
            type:String,
            required:true
        },
        invites:{
            type:Array
        },
        members:{
            type:Array
        }
    }
)

const Projects = mongoose.model("Projects",projectSchema)

module.exports = {Projects}