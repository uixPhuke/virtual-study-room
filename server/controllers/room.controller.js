const Room = require("../models/roomSchema");

const createRoom = async (req, res) => {
  const room = await Room.create({
    ...req.body,
    createdBy: req.user.id,
    members: [req.user.id]
  });

  res.status(201).json(room);
};

const getRooms = async (req, res) => {
  const rooms = await Room.find().populate("createdBy", "name");
  res.json(rooms);
};

module.exports = {
  createRoom,
  getRooms
};
