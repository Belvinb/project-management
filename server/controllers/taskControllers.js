const asyncHandler = require("express-async-handler");
const { Tasks } = require("../models/taskModel");
const mongoose = require("mongoose");
var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "belvinbbenny@gmail.com",
    pass: "wvigtoitzhlcxnnq",
  },
});

const createTask = asyncHandler(async (req, res) => {
  const {
    taskTitle,
    taskDescription,
    startDate,
    endDate,
    assigned,
    createdBy,
    projectId,
  } = req.body;
  console.log(req.body, "createtask");
  const task = await Tasks.create({
    taskTitle,
    taskDescription,
    startDate,
    endDate,
    assigned,
    createdBy,
    projectId,
  });
  if (task) {
    console.log("sucess");
    res.status(200).json(task);
  }
});

const viewAllTasks = asyncHandler(async (req, res) => {
  const { projectId } = req.params;
  let allTasks = await Tasks.find({ projectId: projectId });
  if(allTasks){
    res.status(200).json(allTasks)
  }
});

const viewAssignedTasks = asyncHandler(async(req,res)=>{
   const projectId = req.query.projectId;
   const email = req.query.email;

   let assigned = await Tasks.find({ $and: [{ "projectId": projectId },{"assigned":email}] });
   if(assigned){
    res.status(200).json(assigned)
   }
})

const changeTaskStatus = asyncHandler(async(req,res)=>{
  console.log(req.body)
  const {status,taskId} = req.body
  let changeStatus = await Tasks.updateOne({"_id":taskId},{
    $set:{"status":status}
  })
  if(changeStatus){
    res.status(200).json(changeStatus)
  }
})

module.exports = {
  createTask,
  viewAllTasks,
  viewAssignedTasks,
  changeTaskStatus,
};
