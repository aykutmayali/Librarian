const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController');

// Book routes
router.get('/books', BookController.list);
router.get('/books/:id', BookController.get);
router.post('/books', BookController.create);

module.exports = router;
