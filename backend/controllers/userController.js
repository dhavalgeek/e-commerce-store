const User = require('../models/userModel');

const getUser = async (req, res) => {
	try {
		const user = await User.findOne({}).populate('orders');

		return res
			.status(200)
			.json({ message: 'User created successfully..', data: user });
	} catch (error) {
		console.error('Error occured while fetching user: ', error);
		return res.status(500).json({ message: error.message });
	}
};

const createUser = async (req, res) => {
	const userData = {
		name: 'John',
		email: 'john@mail.com',
		orders: [],
		addresses: []
	};

	try {
		let newUser = await new User(userData);
		newUser = await newUser.save();

		return res
			.status(200)
			.json({ message: 'User created successfully..', data: newUser });
	} catch (error) {
		console.error('Error occured while creating user: ', error);
		return res.status(500).json({ message: error.message });
	}
};

const updateUserAddress = async (req, res) => {
	try {
		const userId = '65cca5f09dcd3d717f60472a'; // '65ca49d62e48dc4ba71cd022';
		const address = req.body.address;
		const user = await User.findById(userId);

		user.addresses.push(address);
		const updated = await user.save();

		return res
			.status(200)
			.json({ message: 'User created successfully..', data: address });
	} catch (error) {
		console.error('Error occured while creating user: ', error);
		return res.status(500).json({ message: error.message });
	}
};

module.exports = { getUser, createUser, updateUserAddress };
