var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var catSchema = new Schema({
	name: {
	 type: String,
	 required: true,
	 unique: true
	},

	text: {
	 type: String,
	 required: true
	},

	address: {
	 type: String,
	 required: true
	},
	
	post: {
	 type: Schema.Types.ObjectID,
	 ref: 'post',
	 required: true
	}
