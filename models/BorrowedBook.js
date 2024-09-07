const knex = require('../config/knexfile');

const BorrowedBook = {
  create: (userId, bookId) => knex('borrowed_books').insert({ user_id: userId, book_id: bookId }),
  getBorrowedByUser: (userId) => knex('borrowed_books').where({ user_id: userId, returned: false }).select('book_id'),
  returnBook: (userId, bookId, rating) => knex('borrowed_books').where({ user_id: userId, book_id: bookId }).update({ returned: true, rating }),
};

module.exports = BorrowedBook;
