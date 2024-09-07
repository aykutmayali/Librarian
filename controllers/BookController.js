const Book = require('../models/Book');

const BookController = {
  list: async (req, res) => {
    const { query } = req.query;  // Get the search query from request parameters
    if (query) {
      // Search for books based on the query
      const books = await Book.searchBooks(query);
      return res.status(200).json(books);
    } else {
      // If no query, return all books
      const books = await Book.getAll();
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
