const express = require("express");
const productRoute = require("@routes/product.route.js");
const reviewRoute = require("@routes/review.route.js");
const { setupSwagger } = require("@src/swagger.js");

const app = express();
app.use(express.json());

// Routes
app.get("/api", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoute);
app.use("/api/reviews", reviewRoute);

setupSwagger(app, "/api/docs");
module.exports = app;
