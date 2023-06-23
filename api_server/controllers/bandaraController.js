const mongoose = require("mongoose");

let Bandara = mongoose.model("Bandara");

const bandaraList = async (req, res) => {
	try {
		const bandara = await Bandara.find({});
		return res.status(200).json({
			status: "success",
			data: bandara,
		});
	} catch (err) {
		return res.status(500).json({
			status: "error",
			message: err.message,
		});
	}
};

const bandaraCreate = async (req, res) => {
	const bandaraNew = new Bandara({
		nama: req.body.nama,
		lokasi: req.body.lokasi,
		luas: req.body.luas,
		foto: req.body.foto,
	});

	try {
		const bandara = await bandaraNew.save();
		res.status(200).json({
			status: "success",
			message: "Bandara berhasil ditambahkan",
			data: bandara,
		});
	} catch (err) {
		res.status(500).json({
			status: "error",
			message: "Bandara gagal ditambahkan",
			error: err,
		});
	}
};

module.exports = {
	bandaraList,
	bandaraCreate,
};
