const path = require('path');
const { randomNumber } = require('../helpers/libs');
const fs = require('fs-extra');

const { Image } = require('../models');

const ctrl = {

};

ctrl.index = (req, res) => {
	
};

ctrl.create = async (req, res) => {
	const imageUrl = randomNumber();
	const imageTempPath = req.file.path;
	const ext = path.extname(req.file.originalname).toLowerCase();
	const targetPath = path.resolve(`src/public/uploads/${imageUrl}${ext}`);

	if( ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif' ) {
		await fs.rename(imageTempPath, targetPath);
		const newImg = new Image({
			title: req.body.title,
			description: req.body.description,
			filename: imageUrl + ext
		});
		const imageSave = await newImg.save();
		console.log(newImg);
	}
	res.send('Works!');
};

ctrl.like = (req, res) => {

};

ctrl.comment = (req, res) => {

};

ctrl.remove = (req, res) => {

};

module.exports = ctrl;