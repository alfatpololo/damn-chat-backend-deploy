const express = require("express");
// const { list, detail, insert, destroy, update } = require('../controller/user.controller')
const {
  register,
  login,
  getAllUser,
  getUserId,
  updateUser,
  deleteUser,
} = require("../controller/user.controller");
const {deleteChat, getChat} = require("../controller/chat.controller");
const { upload } = require("../middleware/uploadImg");
const { removeProfile } = require("../middleware/deleteImg");
const jwtAuth = require("../middleware/jwtAuth");
const { isAdmin } = require("../middleware/auth");
const router = express.Router();

// const jwtAuth = require('../middleware/jwtAuth');

// API GET users - list
router
  .get("/user/list/", getAllUser)
  .post("/register", register)
  .post("/login", login)
  .get("/user/list/:id_user", getUserId)
  // .get("/user/list/name/:name", getUserByName)

  .put("/user/update/:id_user", removeProfile, upload, updateUser)
  .delete("/user/delete/:id_user", removeProfile, deleteUser)
  .delete("/chat/delete/:id_chat", deleteChat)
  
  .get("/chat/list/:id_user", getChat);

module.exports = router;
