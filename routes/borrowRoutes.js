const express = require('express');
const router = express.Router();
const BorrowController = require('../controllers/BorrowController');

// Borrow routes
router.post('/users/:userId/borrow/:bookId', BorrowController.borrow);
router.post('/users/:userId/return/:bookId', BorrowController.return);

module.exports = router;
