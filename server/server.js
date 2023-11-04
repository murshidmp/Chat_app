// server.js

const express = require("express");
const cors = require('cors');
const app = express();
const authRoutes = require("./routes/auth");
require("dotenv").config();
const mongodbURI = process.env.MONGODB_URI;
const openaiApiKey = process.env.OPENAI_API_KEY;
const mongoose = require("mongoose");



mongoose.connect(mongodbURI, {});

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define your routes here
app.use("/api/auth", authRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
