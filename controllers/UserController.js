const User = require('../models/User');
const BorrowedBook = require('../models/BorrowedBook');

const UserController = {
  list: async (req, res) => {
    const users = await User.getAll();
    res.status(200).json(users);
  },
  get: async (req, res) => {
    const { id } = req.params;
    const user = await User.getById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const borrowedBooks = await BorrowedBook.getBorrowedByUser(id);
    res.status(200).json({ ...user, books: { past: [], present: borrowedBooks } });
  },
  create: async (req, res) => {
    const { name } = req.body;
    await User.create(name);
    res.status(201).json({ message: 'User created' });
  }
};

module.exports = UserController;
