var express = require("express");
var router = express.Router();

const bandaraController = require("../controllers/bandaraController");
const maskapaiController = require("../controllers/maskapaiController");

router.route("/bandara").get(bandaraController.bandaraList).post(bandaraController.bandaraCreate);
router.route("/maskapai").get(maskapaiController.maskapaiList).post(maskapaiController.maskapaiCreate);

module.exports = router;
