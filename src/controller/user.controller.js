const userModel = require("../model/user.model");
const { success, failed, succesWithToken } = require("../helper/response");

//deklare bcyrpt
const jwtToken = require("../helper/generateJWT");
const bcyrpt = require("bcrypt");
module.exports = {
  getAllUser: async (req, res) => {
    try {
      const result = await userModel.list();
      success(res, result.rows, "success", "list user");
    } catch (err) {
      failed(res, err.message, "failed", "internal server error");
    }
  },

  getUserId: async (req, res) => {
    try {
      const { id_user } = req.params;
      const result = await userModel.listUserById(id_user);
      success(res, result.rows, "success", "list user");
    } catch (err) {
      failed(res, err.message, "failed", "internal server error");
    }
  },

  register: (req, res) => {
    try {
      const { username, email, password } = req.body;
      bcyrpt.hash(password, 10, (err, hash) => {
        if (err) {
          failed(res, err.message, "failed", "failed hash password");
        }

        const data = {
          username,
          email,
          password: hash,
          level: 0,
          image: req.file ? req.file.filename : "default.png",
        };

        userModel
          .register(data)
          .then((result) => {
            success(res, result, "success", "Success register");
          })
          .catch((err) => {
            failed(res, err.message, "failed", "Failed register");
          });
      });
    } catch (err) {
      failed(res, err.message, "failed", "internal server error");
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    userModel
      .checkEmail(email)
      .then((result) => {
        const user = result.rows[0];
        if (result.rowCount > 0) {
          bcyrpt
            .compare(password, result.rows[0].password)
            .then(async (result) => {
              if (result) {
                const token = await jwtToken({
                  email: user.email,
                });
                succesWithToken(
                  res,
                  {
                    token,
                    data: {
                      id_user: user.id_user,
                      email: user.email,
                      username: user.username,
                      phone: user.phone,
                      image: user.image,
                      description: user.description,
                      level: user.level,
                    },
                  },
                  token,
                  "success",
                  "Success login"
                );
              } else {
                failed(res, null, "failed", "Username or password wrong");
              }
            });
        } else {
          failed(res, null, "failed", "Username or password wrong");
        }
      })
      .catch((err) => {
        failed(res, err.message, "failed", "Internal server error");
      });
  },

  updateUser: (req, res) => {
    const id_user = req.params.id_user;
    const { full_name, username, email, phone, description } = req.body;
    const image = req.file ? req.file.filename : "default.png";
    userModel
      .updateUser(id_user, full_name, username, email, phone, image, description)
      .then((result) => {
        success(res, result, "success", "Success update user");
      })
      .catch((err) => {
        failed(res, err.message, "failed", "Failed update user");
      });
  },

  deleteUser: (req, res) => {
    const id_user = req.params.id_user;
    userModel
      .deleteUser(id_user)
      .then((result) => {
        success(res, result, "success", "Success delete user");
      })
      .catch((err) => {
        failed(res, err.message, "failed", "Failed delete user");
      });
  },
};
