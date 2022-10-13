const subTasks = require("../models/subTaskModel")
const mongoose = require("mongoose")

const createSubTask = async(req,res)=>{
   console.log(req.body)
   const {subtask,taskId,createdOn,createdBy} = req.body
   try {
    const sub = await subTasks.create({
        subtask,
        taskId,
        createdOn,
        createdBy,   
    })
    res.status(200).json(sub)
   } catch (error) {
    console.log(error)
   }


}

module.exports = createSubTask