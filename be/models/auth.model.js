const pool = require("../loaders/db");
class AuthModel {
  signupUser = (infor, callback) => {
    const { username, password, hovaten } = infor;
    const sql = `CALL InsertTaiKhoan(?, ?, ?,'2000-01-01','reader','DAI HỌC BK TPHCM','09999999999')`;
    const params = [username, password, hovaten];
    pool.query(sql, params, callback);
  };

  deleteAccountUser = (id, callback) => {
    console.log("this is id in model", id);
    const sql = `DELETE FROM TaiKhoan WHERE MaSoTaiKhoan = ?`;

    const params = [id];
    pool.query(sql, params, callback);
  };
}
module.exports = AuthModel;
