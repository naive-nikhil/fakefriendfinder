const Game = require("../models/Game");
const mongoose = require("mongoose");
const { hashData } = require("../utils/hashData.js");

exports.createGame = async (req, res) => {
  // Get Data from Request Body
  const { gameData } = req.body;

  // Validate Data
  if (!gameData || !Array.isArray(gameData) || gameData.length !== 3) {
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

  // Hash game data
  const hashedGameData = gameData.map((item) => ({
    hashedQuestion: hashData(item.question),
    hashedCorrectAnswer: hashData(item.correctAnswer),
  }));

  console.log(hashedGameData);

  // Save to DB
  const newGame = await Game.create({ hashedGameData });

  // Send Response
  res.status(201).json({ gameId: newGame._id });
};

exports.getGame = async (req, res) => {
  // Get Data from Request Params
  const { id } = req.params;

  // Validate Id
  if (!id) {
    return res.status(400).json({ message: "Game Id is required." });
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid Game Id." });
  }

  // Get Game from DB
  const game = await Game.findById(id);

  // Validate Game Data from db
  if (!game) {
    return res.status(404).json({ message: "Game not found." });
  }

  // Send Response
  res.status(200).json({
    gameId: game._id,
    gameData: game.hashedGameData,
  });
};

exports.submitResponse = async (req, res) => {};

exports.getScores = async (req, res) => {};
