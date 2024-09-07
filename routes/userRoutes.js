const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// User routes
router.get('/users', UserController.list);
router.get('/users/:id', UserController.get);
router.post('/users', UserController.create);

module.exports = router;


