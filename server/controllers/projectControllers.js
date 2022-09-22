const asyncHandler = require("express-async-handler");
const { Projects } = require("../models/projectModel");
const mongoose = require("mongoose");
var nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config()

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "belvinbbenny@gmail.com",
    pass: process.env.NODEMAILER_PASS,
  },
});

//create project
const createProject = asyncHandler(async (req, res) => {
  const { title, description, startDate, endDate, createdBy, projectID } =
    req.body;
  const projects = await Projects.create({
    title,
    description,
    startDate,
    endDate,
    createdBy,
    projectID,
    members: createdBy,
  });

  if (projects) {
    res.status(200).json(projects)
  }
});

// view all projects
const myCreatedProjects = asyncHandler(async (req, res) => {
  const { myId } = req.params;
  const myProjects = await Projects.find({
    $or: [
      {
        $and: [
          { createdBy: myId },
          { members:myId},
        ],
      },
      { members: myId },
    ],
  });
  res.json(myProjects).status(200);
});

const inviteMembers = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { projectId, email } = req.body;
  const projectCode = await Projects.findById(projectId);
  console.log(projectCode);
  const mailOptions = {
    from: "belvinbbenny@gmail.com", // sender address
    to: `${email}`, // list of receivers
    subject: "Invitation", // Subject line
    html: `Enter the code provided to join the project : ${projectCode.projectID}`, // plain text body
  };
  try {
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) console.log(err);
      else console.log(info)
    });
  } catch (error) {
    console.log(error);
  }

  let invited = await Projects.findByIdAndUpdate(projectId, {
    $push: { invites: email },
  });
  console.log("invited", invited);
});

//join projects
const joinProject = asyncHandler(async (req, res) => {
  const { email, projectCode, userId } = req.body;
  const projectValidation = await Projects.find({
    $and: [{ "projectID": projectCode }, { "invites": email }],
  });
  if(projectValidation){
    return await Projects.updateOne({"projectID":projectCode},
    {
      $push:{"members":userId}
    }
    ).then((response)=>{
      res.status(200).json(response)
    })
  }

});

const getTeam = asyncHandler(async(req,res)=>{
  const {projectId} = req.params
  console.log(req.params,"params")
  let members = await Projects.aggregate([
    {
      $match: { _id: new mongoose.Types.ObjectId(projectId) },
    },
    {
      $lookup: {
        from: "users",
        localField:"members",
        foreignField: "_id",
        as:"projectmems"
      },
    },
    {
      $project:{projectmems:1}
    },
    
  ])
  res.status(200).json(members)
})

module.exports = {
  createProject,
  myCreatedProjects,
  joinProject,
  inviteMembers,
  getTeam,
};
