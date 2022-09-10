const express = require("express");
const { createProject, myCreatedProjects, joinProject, inviteMembers } = require("../controllers/projectControllers");
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


module.exports = router
