const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const BorrowedBook = require('../models/BorrowedBook');

const UserController = {
  // List all users
  list: async (req, res, next) => {
    try {
      const users = await User.getAll();
      res.status(200).json(users);
    } catch (err) {
      next(err);  // Passes the error to the error handling middleware
    }
  },

  // Get a single user by ID, including past and present borrowed books
  get: async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await User.getById(id);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Get borrowed books for the user
      const pastBooks = await BorrowedBook.getPastBorrowedByUser(id);
      const presentBooks = await BorrowedBook.getPresentBorrowedByUser(id);

      res.status(200).json({
        id: user.id,
        name: user.name,
        books: {
          past: pastBooks,
          present: presentBooks,
        }
      });
    } catch (err) {
      next(err);
    }
  },

  // Create a new user with validation
  create: [
    body('name').isString().notEmpty().withMessage('Name is required'),
    async (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next({ errors: errors.array() }); // Pass errors to the middleware
      }
  
      try {
        const { name } = req.body;
        await User.create(name);
        res.status(201).json({ message: 'User created' });
      } catch (err) {
        next(err); // Pass database errors to middleware
      }
    }
  ],
};

module.exports = UserController;
