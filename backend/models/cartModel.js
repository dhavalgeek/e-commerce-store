const mongoose = require('mongoose');

const cartSchema = mongoose.Schema(
	{
		items: {
			type: [Object],
			required: true,
			default: []
		},
		userId: {
			type: String,
			default: 1
		}
	},
	{ timestamps: true }
);

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
