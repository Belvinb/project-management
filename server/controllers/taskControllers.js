const asyncHandler = require("express-async-handler");
const { Tasks } = require("../models/taskModel");


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

const getSingleTaskDetails = asyncHandler(async(req,res)=>{
  try {
     const { taskId } = req.params;
     const TaskDetails = await Tasks.findById(taskId);
     res.status(200).json(TaskDetails);
  } catch (error) {
    console.log(error)
  }
 
})

const addComment = async(req,res)=>{
  try {
    console.log(req.body,"comment in backend")
    const {commentBody,taskinfo,userName,Date,Time} = req.body
    const commentData ={
      userName,
      commentBody,
      Date,
      Time,
    }
    const commentDetails = await Tasks.findByIdAndUpdate(taskinfo,{
      $push:{"comments":commentData}
    })
    console.log(commentDetails,"details")
    res.status(201).json(commentDetails)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createTask,
  viewAllTasks,
  viewAssignedTasks,
  changeTaskStatus,
  getSingleTaskDetails,
  addComment,
};
