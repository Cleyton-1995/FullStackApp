const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to FullStackApp",
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
   console.log(`Server Running: ${PORT}`.bgGreen.white);
})