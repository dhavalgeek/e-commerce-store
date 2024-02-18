const express = require('express');
const { getUser, createUser, updateUserAddress, loginUser, signupUser, logoutUser } = require('../controllers/userController');
const router = express.Router();

router.get('/', getUser);
router.get('/logout', logoutUser);
router.post('/login', loginUser);
router.post('/signup', signupUser);
router.post('/create', createUser);
router.put('/address', updateUserAddress);

module.exports = router;
