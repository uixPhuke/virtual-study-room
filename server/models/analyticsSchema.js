const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    totalStudyTime: {
      type: Number,
      default: 0,
    },
    totalSessions: {
      type: Number,
      default: 0,
    },
    lastActive: {
      type: Date,
    },

    dailyFocusScores: {
      type: [Number],
      default: [],
    },
    dailyDistractions: {
      type: Number,
      default: 0,
    },

    weeklyStats: {
      focusScores: {
        type: [Number],
        default: [],
      },
      distractions: {
        type: [Number],
        default: [],
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Analytics", analyticsSchema);
