const router = require("express").Router();
const {
  createGame,
  getGame,
  submitResponse,
} = require("../controllers/gameController.js");
const asyncHandler = require("../utils/asyncHandler.js");

router.post("/create-game", asyncHandler(createGame));
router.get("/game/:id", asyncHandler(getGame));
router.post("/game/:id/submit-response", asyncHandler(submitResponse));

module.exports = router;
