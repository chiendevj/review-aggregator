require("dotenv").config();

const config = {
  database: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
  scraper: {
    baseUrl: process.env.SCRAPER_BASE_URL,
  },
};
module.exports = config;