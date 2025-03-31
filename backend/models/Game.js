const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    gameData: [
      {
        question: { type: String, required: true },
        correctAnswer: { type: String, required: true },
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
