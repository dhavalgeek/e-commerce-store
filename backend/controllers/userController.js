const User = require('../models/userModel');

const getUser = async (req, res) => {
	try {
		if (req.session.user) {
			const user = await User.findOne({ username: req.session.username }).populate('orders');

			if (user) {
				req.session.user = user;
				return res.status(200).json({ message: 'User fetched successfully', data: user });
			} else {
				return res.status(404).json({ message: 'Error occured while fetching user' });
			}
		} else {
			res.status(404).json({ message: 'Invalid user session!' });
		}
		// const user = await User.findOne({}).populate('orders');

		// return res.status(200).json({ message: 'User created successfully..', data: user });
	} catch (error) {
		console.error('Error occured while fetching user: ', error);
		return res.status(500).json({ message: error.message });
	}
};

const loginUser = async (req, res) => {
	try {
		const { username, password } = req.body.user;
		const user = await User.findOne({ username, password }).populate('orders');

		if (user) {
			req.session.user = user;
			return res.status(200).json({ message: 'User fetched successfully', data: user });
		} else {
			return res.status(404).json({ message: 'Error occured while fetching user' });
		}
	} catch (error) {
		console.error('Error occured while fetching user data: ', error);
		return res.status(500).json({ message: error.message });
	}
};

const signupUser = async (req, res) => {
	try {
		if (await User.findOne({ username: req.body.user.username })) {
			return res.status(404).json({ message: 'Username already exists!' });
		}

		const user = await new User({ ...req.body.user, email: req.body.user.username, orders: [] });
		const createdUser = await user.save();

		req.session.user = createdUser;
		return res.status(200).json({ data: createdUser });
	} catch (error) {
		console.error('Error occured while creating user: ', error);
		return res.status(500).json({ message: error.message });
	}
};

const logoutUser = (req, res) => {
	req.session.user = null;
	return res.status(200).json({ message: 'User session is cleared' });
};

const createUser = async (req, res) => {
	const userData = {
		name: 'John',
		email: 'john@mail.com',
		orders: [],
		addresses: []
	};

	try {
		let newUser = await new User({ userData });
		newUser = await newUser.save();

		return res.status(200).json({ message: 'User created successfully..', data: newUser });
	} catch (error) {
		console.error('Error occured while creating user: ', error);
		return res.status(500).json({ message: error.message });
	}
};

const updateUserAddress = async (req, res) => {
	try {
		const userId = req.session.user._id; // '65ca49d62e48dc4ba71cd022';
		const address = req.body.address;
		const user = await User.findById(userId);

		user.addresses.push(address);
		const updated = await user.save();

		return res.status(200).json({ message: 'User created successfully..', data: address });
	} catch (error) {
		console.error('Error occured while updating user address: ', error);
		return res.status(500).json({ message: error.message });
	}
};

module.exports = { getUser, loginUser, signupUser, logoutUser, createUser, updateUserAddress };
