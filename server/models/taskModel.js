const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema(
    {
        taskTitle:{
            type:String,
            required:true
        },
        taskDescription:{
            type:String,
            required:true
        },
        startDate:{
            type:String,
            required:true
        },
        endDate:{
            type:String,
            required:true
        },
        assigned:{
            type:String,
            required:true
        },
        status:{
            type:String,
            default:"pending"
        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            required:true
        },
        projectId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true
        }
    }
)

const Tasks = mongoose.model("Tasks",taskSchema)
module.exports = {Tasks}