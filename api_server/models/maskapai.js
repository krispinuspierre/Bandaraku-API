const mongoose = require("mongoose");

const maskapaiSchema = new mongoose.Schema({
	nama: String,
	foto: String,
});

mongoose.model("Maskapai", maskapaiSchema, "maskapai");
