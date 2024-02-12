const placeOrder = async (req, res) => {
	try {
		const userId = '65ca49d62e48dc4ba71cd022';
		const order = request.body.order;
		const updateOrder = await User.findOne({ userId });
		await updateOrder.orders.push(order);
		const updated = await updateOrder.save();

		return res
			.status(200)
			.json({ message: 'User created successfully..', data: updated });
	} catch (error) {
		console.error('Error occured while creating user: ', error);
		return res.status(500).json({ message: error.message });
	}
};

module.exports = { placeOrder };
