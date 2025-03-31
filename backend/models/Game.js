const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    hashedGameData: [
      {
        hashedQuestion: { type: String, required: true },
        hashedCorrectAnswer: { type: String, required: true },
        _id: false,
      },
    ],
    responses: [
      {
        friendName: { type: String, required: true },
        answers: [{ type: String, required: true }],
        score: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Game", gameSchema);
