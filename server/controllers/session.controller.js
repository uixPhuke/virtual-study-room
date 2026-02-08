const Session = require("../models/Session.model");

const startSession = async (req, res) => {
  const session = await Session.create({
    user: req.user.id,
    room: req.body.room,
    startTime: new Date()
  });

  res.status(201).json(session);
};

const endSession = async (req, res) => {
  const session = await Session.findById(req.params.id);

  session.endTime = new Date();
  session.duration =
    (session.endTime - session.startTime) / 60000;

  await session.save();
  res.json(session);
};

module.exports = {
  startSession,
  endSession
};
