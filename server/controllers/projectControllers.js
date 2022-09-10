const asyncHandler = require("express-async-handler");
const { Projects } = require("../models/projectModel");
var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "belvinbbenny@gmail.com",
    pass: "wvigtoitzhlcxnnq",
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
    res.status(200)
  }
});

// view all projects
const myCreatedProjects = asyncHandler(async (req, res) => {
  const { myId } = req.params;
  console.log(req.params);
  console.log(myId);
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
    html: `${projectCode.projectID}`, // plain text body
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
  console.log(req.body);
  const projectValidation = await Projects.find({
    $and: [{ projectID: projectCode }, { invites: email }],
  });
  let joined = await Projects.updateOne(
    { ProjectID: projectCode },
    {
      $push: { members: userId },
    }
  );
  if(joined){
    console.log("added to members")
  }
  if (projectValidation) {
    console.log("sucess joined");
  }
});

module.exports = {
  createProject,
  myCreatedProjects,
  joinProject,
  inviteMembers,
};
