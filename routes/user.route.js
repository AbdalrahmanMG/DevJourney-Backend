const router = require("express").Router();
const { test } = require("../controllers/user.controller.js");

router.route("/test").get(test);

module.exports = router;
