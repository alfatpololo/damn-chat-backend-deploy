const chatModel = require("../model/chat.model");
const { success, failed, succesWithToken } = require("../helper/response");

//deklare bcyrpt
const jwtToken = require("../helper/generateJWT");
const bcyrpt = require("bcrypt");

module.exports = {
    deleteChat: async (req, res) => {
        try {
            const { id_chat } = req.params;
            const result = await chatModel.deleteChat(id_chat);
            success(res, result, "success", "delete chat");
        } catch (err) {
            failed(res, err.message, "failed", "internal server error");
        }
    },

    // get chat promise
    getChat: async (req, res) => {
        try {
            const { id_user } = req.params;
            const result = await chatModel.getChat(id_user);
            success(res, result.rows, "success", "get chat");
        } catch (err) {
            failed(res, err.message, "failed", "internal server error");
        }
    }
}