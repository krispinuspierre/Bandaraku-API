const mongoose = require("mongoose");

const bandaraSchema = new mongoose.Schema({
	nama: String,
	lokasi: String,
	luas: String,
	foto: String,
});

mongoose.model("Bandara", bandaraSchema, "bandara");
