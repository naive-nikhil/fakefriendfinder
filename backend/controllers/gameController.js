const Game = require("../models/Game");

exports.createGame = async (req, res) => {
  // Get Data from Request Body
  const { gameData } = req.body;

  // Validate Data
  if (!gameData || !Array.isArray(gameData) || gameData.length !== 10) {
    return res
      .status(400)
      .json({ message: "Invalid game data, must be an array of 10 items." });
  }
  for (const item of gameData) {
    if (!item.question || !item.correctAnswer) {
      return res.status(400).json({
        message:
          "Invalid game data, each item must have a question and answer.",
      });
    }
  }

  // Save to DB
  const newGame = new Game.create({ gameData });

  // Send Response
  res.status(201).json({ gameId: newGame._id });
};

exports.getGame = async (req, res) => {};

exports.submitResponse = async (req, res) => {};
