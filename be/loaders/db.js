let { env } = require("../config");
const mysql = require("mysql");

const dbConfg = {
  host: env.DB_HOST,
  user: env.DB_USER,
  database: env.DB_DATABASE,
  password: env.DB_PASSWORD,
};

const pool = mysql.createConnection(dbConfg);
pool.connect((err) => {
  if (err) {
    console.log("Kết nối MySQL không thành công:", err);
  } else {
    console.log("Kết nối MySQL thành công.");
  }
});

module.exports = pool;
