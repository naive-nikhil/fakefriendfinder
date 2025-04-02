const Game = require("../models/Game");
const mongoose = require("mongoose");
const { hashData } = require("../utils/hashData.js");

exports.createGame = async (req, res) => {
  // Get Data from Request Body
  const { createdBy, gameData } = req.body;

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

  if (!createdBy) {
    return res
      .status(400)
      .json({ message: "Name of the Quiz Creator is required!" });
  }

  const hashedCreatedBy = hashData(createdBy);

  // Hash game data
  const hashedGameData = gameData.map((item) => ({
    hashedQuestion: hashData(item.question),
    hashedCorrectAnswer: hashData(item.correctAnswer),
  }));

  // Save to DB
  const newGame = await Game.create({ hashedCreatedBy, hashedGameData });

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
    hashedGameData: game.hashedGameData,
  });
};

exports.submitResponse = async (req, res) => {
  // Get data from request params and body
  const { id } = req.params;
  const { guessedAnswers, friendName, score } = req.body;

  // Validate Id and Responses
  if (!id) {
    return res.status(400).json({ message: "Game Id is required." });
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid Game Id." });
  }

  if (
    !guessedAnswers ||
    !Array.isArray(guessedAnswers) ||
    guessedAnswers.length !== 10 ||
    !friendName ||
    !score
  ) {
    return res.status(400).json({
      message: "Invalid responses, must be an array of 10 responses.",
    });
  }

  // Hash responses
  const hashedGuessedAnswers = guessedAnswers.map((item) => hashData(item));
  const hashedFriendName = hashData(friendName);
  const hashedScore = hashData(score);

  // Get Game from DB
  const game = await Game.findById(id);

  // Validate Game Data from db
  if (!game) {
    return res.status(404).json({ message: "Game not found." });
  }

  // Store hashed responses in DB
  game.hashedResponses.push({
    hashedFriendName,
    hashedGuessedAnswers,
    hashedScore,
  });

  // Save to DB
  await game.save();

  res.status(201).json({ message: "Response submitted successfully." });
};
