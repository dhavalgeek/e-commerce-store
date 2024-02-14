const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		addresses: [Object],
		orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
	},
	{ timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
