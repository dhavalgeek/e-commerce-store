const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		email: {
			type: String
			// required: true
		},
		username: {
			type: String,
			required: true,
			unique: true
		},
		password: String,
		addresses: {
			type: [Object],
			default: []
		},
		orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
	},
	{ timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
