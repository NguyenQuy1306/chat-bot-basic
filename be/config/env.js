require("dotenv").config();
module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 3006,
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_USER: process.env.DB_USER || "root",
  DB_PASSWORD: process.env.DB_PASSWORD || "Ngocquynguyen1",
  DB_DATABASE: process.env.DB_DATABASE || "sso",
  SECRET_JWT: process.env.SECRET_JWT || "",
  PORT_WEB: process.env.PORT_WEB || 5000,
  DB_DIALECT: "mysql",
  POOL: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
