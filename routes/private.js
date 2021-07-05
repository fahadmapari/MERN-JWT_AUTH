const { getPrivateData } = require("../controllers/private");
const { protect } = require("../middleware/auth");

const router = require("express").Router();

router.route("/").get(protect, getPrivateData);

module.exports = router;
