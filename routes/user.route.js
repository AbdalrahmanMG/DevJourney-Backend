const router = require("express").Router();
const { getAllUser,updateUser,deleteUser,getUserById } = require("../controllers/user.controller.js");

router.route("/getUser").get(getAllUser);
router.route("/:id").get(getUserById);
router.patch("/:id",updateUser);
router.delete("/:id",deleteUser);

module.exports = router;
