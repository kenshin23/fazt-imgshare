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

CommentSchema.virtual('uniqueId')
	.get(function (){
		return this.filename.replace(path.extname(this.filename), '');
	});

module.exports = model('Comment', CommentSchema);