const express = require("express");
const {
  createRoom,
  getRooms
} = require("../controllers/room.controller");
const { protect } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/", protect, createRoom);
router.get("/", protect, getRooms);

module.exports = router;
