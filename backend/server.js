// Necessary Imports
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const gameRoutes = require("./routes/gameRoutes.js");
const errorHandler = require("./utils/errorHandler.js");

// Environment Variables and DB Connection
require("dotenv").config();
connectDB();

// Express App Setup
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// API Routes
app.use("/api", gameRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("API Live...");
});

// Error Handling Middleware
app.use(errorHandler);

// Server Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server Live: PORT ${PORT}`);
});
