const express = require("express");
const { createProject, myCreatedProjects, joinProject, inviteMembers, getTeam } = require("../controllers/projectControllers");
const createTask = require("../controllers/taskControllers");
const { registerUser, authUser, createSubscription, subSuccess, getProfile } = require("../controllers/userControllers");
const router = express.Router();

router.post("/signup", registerUser);
router.post("/login",authUser)
router.post("/subscription",createSubscription)
router.post("/subSuccess",subSuccess)
router.get("/profile", getProfile);
router.post("/createProject", createProject);
router.get("/myCreatedProjects/:myId", myCreatedProjects);
router.post("/joinProject", joinProject);
router.post("/invite", inviteMembers);
router.get("/getTeam/:projectId", getTeam);
router.post("/createTask", createTask);


module.exports = router
