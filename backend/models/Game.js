const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    createdBy: { type: String, required: true },
    hashedGameData: [
      {
        question: { type: String, required: true },
        hashedCorrectAnswer: { type: String, required: true },
        options: [{ type: String, required: true }],
        _id: false,
      },
    ],
    hashedResponses: [
      {
        hashedFriendName: { type: String, required: true },
        hashedGuessedAnswers: [{ type: String, required: true }],
        hashedScore: { type: String, required: true },
        _id: false,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Game", gameSchema);
