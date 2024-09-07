const Book = require('../models/Book');

const BookController = {
  list: async (req, res) => {
    const { query, page = 1, limit = 10 } = req.query;  // Get page and limit from query parameters

    if (query) {
      // Search with pagination
      const books = await Book.searchBooks(query, parseInt(page), parseInt(limit));
      return res.status(200).json(books);
    } else {
      // List all books with pagination
      const books = await Book.getAll(parseInt(page), parseInt(limit));
      return res.status(200).json(books);
    }
  },

  get: async (req, res) => {
    const { id } = req.params;
    const book = await Book.getById(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  },

  create: async (req, res) => {
    const { name } = req.body;
    await Book.create(name);
    res.status(201).json({ message: 'Book created' });
  }
};

module.exports = BookController;
