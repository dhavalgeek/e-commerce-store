const User = require('../models/userModel');

const getUser = async (req, res) => {
	try {
		const user = await User.findOne({});

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
		const userId = '65ca49d62e48dc4ba71cd022';
		const address = request.body.address;
		const updateAddress = await User.findOne({ userId });
		await updateAddress.addresses.push(address);
		const updated = await updateAddress.save();

		return res
			.status(200)
			.json({ message: 'User created successfully..', data: updated });
	} catch (error) {
		console.error('Error occured while creating user: ', error);
		return res.status(500).json({ message: error.message });
	}
};

module.exports = { getUser, createUser, updateUserAddress };
