// server.js

const express = require("express");
const cors = require('cors');
const app = express();
require("dotenv").config();
const openaiApiKey = process.env.OPENAI_API_KEY;
const {init}= require('./db')
init((db)=>{
  global.db = db
  const authRoutes = require("./routes/auth");
  app.use("/api/auth", authRoutes);
});

console.log("line no 10")

// Define middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define your routes here
// de
// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

