const fs = require("fs");
const userModel = require("../model/user.model");

module.exports = {
    removeProfile: async (req, res, next) => {
		const id_user = req.params.id_user;

		const data = await userModel.listUserById(id_user);
		if(data) {
			console.log(data.rows[0].image);
			if (data.rows[0].image) {
				const img = data.rows[0].image;
				if (img !== "default.png") {
					fs.unlink(`./public/${img}`, (err) => {
						if (err) {
							res.json({
								message: "delete failed",
								error: err,
							});
						}
					});
				}
				next();
			} else {
				res.json("There is no profile picture");
			}
		}else{
			res.json("User ID is not found");
		}
	},
}