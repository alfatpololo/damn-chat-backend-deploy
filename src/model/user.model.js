const db = require("../config/db");

const userModel = {
  register: ({ username, email, phone, password, level, image }) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO users (username, email, password,level, image) VALUES ('${username}', '${email}', '${password}', ${level}, '${image}')`,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(err);
          }
        }
      );
    });
    // return new Promise((resolve, reject) => {
    //   db.query(
    //     `INSERT INTO users(username, password)
    //       VALUES
    //       ('${username}', '${password}')`,
    //     (err, res) => {
    //       if (err) {
    //         reject(err);
    //       }
    //       resolve(res);
    //     }
    //   );
    // });
  },

  list: () => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },

  listUserById: (id_user) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE id_user = ${id_user}`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
  updateUser: (id_user, full_name, username, email, phone, image, description) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE users SET full_name = '${full_name}', username = '${username}', email = '${email}', phone = '${phone}', image = '${image}', description = '${description}' WHERE id_user = ${id_user}`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },

  checkEmail: (email) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE email = '${email}'`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
  // checkUsername: (username) => {
  //   return new Promise((resolve, reject) => {
  //     db.query(
  //       `SELECT * FROM users WHERE username = '${username}'`,
  //       (err, res) => {
  //         if (err) {
  //           reject(err);
  //         }
  //         resolve(res);
  //       }
  //     );
  //   });
  // },

  deleteUser: (id_user) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM users WHERE id_user = ${id_user}`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
};
module.exports = userModel;
