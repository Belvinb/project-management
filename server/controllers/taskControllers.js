const asyncHandler = require("express-async-handler");
const {Tasks} = require("../models/taskModel")
const mongoose = require("mongoose");
var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "belvinbbenny@gmail.com",
    pass: "wvigtoitzhlcxnnq",
  },
});

const createTask = asyncHandler(async(req,res)=>{
    const {taskTitle,taskDescription,startDate,endDate,assigned,createdBy,projectId} = req.body
    console.log(req.body,"createtask")
    const task = await Tasks.create({
        taskTitle,
        taskDescription,
        startDate,
        endDate,
        assigned,
        createdBy,
        projectId
    })
    if(task){
        console.log("sucess")
        res.status(200).json(task)
    }
})

module.exports = createTask;
