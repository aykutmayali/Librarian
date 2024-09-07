const BorrowedBook = require('../models/BorrowedBook');
const Book = require('../models/Book');

const BorrowController = {
  borrow: async (req, res) => {
    const { userId, bookId } = req.params;
    await BorrowedBook.create(userId, bookId);
    res.status(204).send();
  },
  return: async (req, res) => {
    const { userId, bookId } = req.params;
    const { score } = req.body;
    await BorrowedBook.returnBook(userId, bookId, score);
    const averageScore = await Book.calculateNewRating(bookId);
    await Book.updateRating(bookId, averageScore);
    res.status(204).send();
  }
};

module.exports = BorrowController;
