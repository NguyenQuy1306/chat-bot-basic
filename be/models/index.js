const pool = require("../loaders/db");
let { env } = require("../config");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const { Sequelize, Datatypes } = require("sequelize");
const sequelize = new Sequelize(env.DB_DATABASE, env.username, env.password, {
  host: env.DB_HOST,
  dialect: env.DB_DIALECT,
  operatorsAliases: false,
  pool: {
    max: env.POOL.max,
    min: env.POOL.min,
    acquire: env.POOL.acquire,
    idle: env.POOL.idle,
  },
});

class AuthModel {
  hashPassword = (password) => {
    const hashedPassword = bcrypt.hashSync(`${password}`, salt);
    return hashedPassword;
  };
  signupUser = (infor, callback) => {
    const { email, password, username } = infor;
    const hashPass = this.hashPassword(password);
    const sql = `INSERT INTO user (email,password,username,createdAt,updatedAt) values (?,?,?,now(),now())`;
    const params = [email, hashPass, username];
    pool.query(sql, params, callback);
  };

  deleteAccountUser = (id, callback) => {
    const sql = `DELETE FROM TaiKhoan WHERE MaSoTaiKhoan = ?`;
    const params = [id];
    pool.query(sql, params, callback);
  };

  loginUser = (infor, callback) => {
    const { username, password } = infor;
    const sql = `select * from user where email=? and password=?`;
    const params = [username, password];
    pool.query(sql, params, callback);
  };
}
module.exports = AuthModel;
