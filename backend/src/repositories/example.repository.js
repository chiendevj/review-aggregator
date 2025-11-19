import pool from "../configs/db.js";

export const ExampleRepository = {
  getCurrentTime: async () => {
    const [rows] = await pool.query("SELECT NOW() as time");
    return rows[0];
  },
   getAllUsers: async () => {
    const [rows] = await pool.query("SELECT * FROM users");
    return rows;
  },
};