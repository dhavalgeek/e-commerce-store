const Cart = require('../models/cartModel');

const addCart = async (req, res) => {
	const userId = '65cca5f09dcd3d717f60472a'; // '65ca49d62e48dc4ba71cd022';
	const item = req.body.item;
	if (!item.quantity) {
		item.quantity = 1;
	}

	try {
		let cart = await Cart.findOne({ userId });
		if (cart) {
			const itemIndex = cart.items.findIndex((el) => item._id === el._id);

			if (itemIndex !== -1) {
				cart.items.splice(itemIndex, 1, item);
			} else {
				cart.items.push(item);
			}
		} else {
			cart = new Cart();
			cart.userId = userId;
			cart.items = [item];
			cart.save;
		}

		await cart.save();
		return res
			.status(200)
			.json({ message: 'Item added to the cart', data: cart });
	} catch (error) {
		console.error('Error while adding item to the cart: ', error);
		return res.status(500).json({ message: error.message });
	}
};

const getCart = async (req, res) => {
	try {
		const userId = '65cca5f09dcd3d717f60472a'; // '65ca49d62e48dc4ba71cd022';
		const cart = await Cart.findOne({ userId });

		return res.status(200).json({
			totalCart: cart?.length || 0,
			data: cart ? cart : { userId, items: [] }
			// items: cart
		});
	} catch (error) {
		console.log('Error while fetching the products: ', error);
		return res.status(500).json({
			message: error.message
		});
	}
};

const deleteCart = async (req, res) => {
	try {
		const userId = '65cca5f09dcd3d717f60472a'; // '65ca49d62e48dc4ba71cd022';
		const itemId = req.params.id;
		let cart = await Cart.findOne({ userId });

		if (itemId && cart) {
			const itemIndex = cart.items.findIndex((el) => itemId == el._id);
			cart.items.splice(itemIndex, 1);

			cart = await cart.save();
		}

		return res.status(200).json({
			totalCart: cart.length,
			data: cart ? cart : { userId, items: [] }
		});
	} catch (error) {
		console.log('Error while fetching the products: ', error);
		return res.status(500).json({
			message: error.message
		});
	}
};

const clearCart = async (req, res) => {
	try {
		const userId = '65cca5f09dcd3d717f60472a'; // '65ca49d62e48dc4ba71cd022';
		const cart = await Cart.findOne({ userId });
		cart.items = [];
		await cart.save();

		return res.status(200).json({ message: 'Cart cleared', data: cart });
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

module.exports = { addCart, getCart, deleteCart, clearCart };
