const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

//get user profile 
router.get('/me', protect, getUserProfile);
//register router
router.post('/register', registerUser);
//login route
router.post('/login', loginUser);

module.exports = router;
