const conn = require("../configs/db");

module.exports = {
  recordGame: (data) => {
    return new Promise((resolve, reject) => {
      conn.query("INSERT INTO football set ?", data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },
  leagueStanding: () => {
    return new Promise((resolve, reject) => {
      conn.query("SELECT * FROM football", (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },

  reset: () => {
    return new Promise((resolve, reject) => {
      conn.query("DELETE FROM football", (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },
};
