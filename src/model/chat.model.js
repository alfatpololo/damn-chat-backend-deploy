const db = require("../config/db");

module.exports = {
  store: (data) => {
    const { sender, receiver, message } = data;
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO chats (sender, receiver, message, date_created) 
            VALUES (${sender}, ${receiver}, '${message}', NOW())`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },

  list: (sender, receiver) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT chats.id_chat, chats.message, userSender.username AS sender, userReceiver.username AS receiver, chats.date_created
            FROM chats
            LEFT JOIN users AS userSender ON chats.sender=userSender.id_user
            LEFT JOIN users AS userReceiver ON chats.receiver=userReceiver.id_user
            WHERE
            (sender=${sender} AND receiver=${receiver})
            OR (sender=${receiver} AND receiver=${sender})`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },
  // deleteChat: (id_chat) => {
  //   return new Promise((resolve, reject) => {
  //     db.query(
  //       `DELETE FROM chats WHERE id_chat=${id_chat}`,
  //       (err, res) => {
  //         if (err) {
  //           reject(err);
  //         }
  //         resolve(res);
  //       }
  //     );
  //   });
  // },
  getChat: (id_user) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT DISTINCT ON (involved)
        involved as userid,
        u.username as username,
        message,
        date_created FROM (SELECT c.*, case sender when ${id_user} then receiver else sender end
        as involved from chats c where c.sender = ${id_user} or c.receiver = ${id_user})
        s join users u on s.involved = u.id_user order by involved, s.date_created desc`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },
};
