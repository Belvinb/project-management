const mongoose = require("mongoose")

const subTaskSchema = new mongoose.Schema(
    {
        subtask:{
            type:String,
            required:true
        },
        taskId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true
        },
        createdOn:{
            type:String
        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            required:true
        }
    },
    {
        timestamps:true
    })

    const subTasks = mongoose.model("subTasks",subTaskSchema)

    module.exports = subTasks