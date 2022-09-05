const express = require("express");
const { registerUser, authUser, createSubscription, subSuccess, getProfile } = require("../controllers/userControllers");
const router = express.Router();

router.post("/signup", registerUser);
router.post("/login",authUser)
router.post("/subscription",createSubscription)
router.post("/subSuccess",subSuccess)
router.get("/profile", getProfile);

module.exports = router
