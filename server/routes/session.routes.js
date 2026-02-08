const express = require("express");
const {
  startSession,
  endSession
} = require("../controllers/session.controller");
const { protect } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/start", protect, startSession);
router.put("/end/:id", protect, endSession);

module.exports = router;
