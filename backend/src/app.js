import express from "express";
import exampleRoute from "./routes/example.route.js";

const app = express();

app.use(express.json());

// Routes
app.get("/api-hd", (req, res) => {
  res.send("API is running...");
});
app.use("/api/example", exampleRoute);

export default app;