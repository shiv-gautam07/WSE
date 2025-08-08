const express = require('express');
const { getProfile, createProfile} = require('../controllers/profileController');

const router = express.Router();

// Route to get user profile
router.get('/user', getProfile);
// Route to update user profile
router.post('/create', createProfile);

module.exports=router;

