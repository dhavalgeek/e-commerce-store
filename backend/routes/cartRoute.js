const express = require('express');
const {
	addCart,
	getCart,
	deleteCart,
	clearCart
} = require('../controllers/cartControllers');
const router = express.Router();

router.post('/', addCart);
router.get('/', getCart);
router.delete('/clear', clearCart);
router.delete('/:id', deleteCart);

module.exports = router;
