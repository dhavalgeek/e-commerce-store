const express = require('express');
const {
	getUser,
	createUser,
	updateUserAddress
} = require('../controllers/userController');
const router = express.Router();

router.get('/', getUser);
router.post('/create', createUser);
router.put('/address', updateUserAddress);

module.exports = router;
