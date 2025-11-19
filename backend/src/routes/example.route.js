import express from "express";
import { ExampleService } from "../services/example.service.js";

const router = express.Router();

router.get("/time", async (req, res) => {
  try {
    const time = await ExampleService.getServerTime();
    res.json({ success: true, time });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to get server time" });
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await ExampleService.listUsers();
    res.json({ success: true, data: users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to list users" });
  }
});

export default router;
