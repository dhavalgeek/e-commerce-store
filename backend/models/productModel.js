const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	category: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	rating: {
		type: Number,
		required: true
	},
	color: {
		type: String,
		enum: ['red', 'green', 'black']
	},
	size: {
		type: String,
		enum: ['S', 'M', 'L']
	},
	details: Object,
	image: {
		type: String,
		required: true
	},
	images: {
		type: [String],
		required: true
	}
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;