const express = require("express");
const {
  createProject,
  myCreatedProjects,
  joinProject,
  inviteMembers,
  getTeam,
} = require("../controllers/projectControllers");
const createSubTask = require("../controllers/subTaskController");
const {
  createTask,
  viewAllTasks,
  viewAssignedTasks,
  changeTaskStatus,
  getSingleTaskDetails,
  addComment,
} = require("../controllers/taskControllers");
const {
  registerUser,
  authUser,
  createSubscription,
  subSuccess,
  getProfile,
} = require("../controllers/userControllers");
const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", authUser);
router.post("/subscription", createSubscription);
router.post("/subSuccess", subSuccess);
router.get("/profile", getProfile);
router.post("/createProject", createProject);
router.get("/myCreatedProjects/:myId", myCreatedProjects);
router.post("/joinProject", joinProject);
router.post("/invite", inviteMembers);
router.get("/getTeam/:projectId", getTeam);
router.post("/createTask", createTask);
router.get("/viewAllTasks/:projectId", viewAllTasks);
router.get("/viewAssignedTasks", viewAssignedTasks);
router.post("/changeTaskStatus", changeTaskStatus);

//get single task details
router.get("/getSingleTaskDetails/:taskId", getSingleTaskDetails);

//add comments
router.post("/addComment", addComment);

//create subTask
router.post("/createSubTasks", createSubTask);

module.exports = router;
