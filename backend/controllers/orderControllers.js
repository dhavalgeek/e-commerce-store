const Order = require('../models/orderModel');
const User = require('../models/userModel');

const placeOrder = async (req, res) => {
	try {
		const userId = req.session.user._id; // '65ca49d62e48dc4ba71cd022';
		const order = req.body.order;

		let newOrder = new Order(order);
		newOrder = await newOrder.save();

		const userOrders = await User.findById(userId);
		userOrders.orders.push(newOrder._id);
		await userOrders.save();

		return res.status(200).json({
			message: 'User created successfully..',
			data: newOrder
		});
	} catch (error) {
		console.error('Error occured while creating user: ', error);
		return res.status(500).json({ message: error.message });
	}
};

module.exports = { placeOrder };
