const express = require("express");
const exampleRoute = require("@routes/example.route.js");

const app = express();

app.use(express.json());

// Routes
app.get("/api", (req, res) => {
  res.send("API is running...");
});
app.use("/api/example", exampleRoute);

module.exports = app;
