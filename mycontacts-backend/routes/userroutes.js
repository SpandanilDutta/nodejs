const express = require("express");
const { registerUser, currentUser, loginUser } = require("../controllers/usercontroller");
const validateToken = require("../middleware/vaildatetokenhandler");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser );

router.get("/current", validateToken, currentUser );

module.exports = router;