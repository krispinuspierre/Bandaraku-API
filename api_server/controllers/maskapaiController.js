const mongoose = require("mongoose");

let Maskapai = mongoose.model("Maskapai");

const maskapaiList = async (req, res) => {
	try {
		const maskapai = await Maskapai.find({});
		res.status(200).json({
			status: "success",
			data: maskapai,
		});
	} catch (err) {
		res.status(500).json({
			status: "error",
			message: err.message,
		});
	}
};

const maskapaiCreate = async (req, res) => {
	const maskapaiNew = new Maskapai({
		nama: req.body.nama,
		foto: req.body.foto,
	});

	try {
		const maskapai = await maskapaiNew.save();
		res.status(200).json({
			status: "success",
			message: "Maskapai berhasil ditambahkan",
			data: maskapai,
		});
	} catch (err) {
		res.status(500).json({
			status: "error",
			message: "Maskapai gagal ditambahkan",
			error: err,
		});
	}
};

module.exports = {
	maskapaiList,
	maskapaiCreate,
};
