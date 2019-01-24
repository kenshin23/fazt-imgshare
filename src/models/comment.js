const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { ObjectId } = Schema;

const path = require('path');

const CommentSchema = new Schema({
	image_id: { type: ObjectId },
	email: { type: String },
	gravatar: { type: String },
	name: { type: String },
	comment: { type: String },
	timestamp: { type: Date, default: Date.now },
});

CommentSchema.virtual('image')
	.set(function (image){
		this._image = image;
	})
	.get(function (image){
		return this._image;
	});

module.exports = model('Comment', CommentSchema);