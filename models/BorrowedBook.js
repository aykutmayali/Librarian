const knexConfig = require('../config/knexfile'); // Import knexfile configuration
const Knex = require('knex');  // Import Knex

// Initialize Knex with the configuration
const knex = Knex(knexConfig.development);  // Pass the development config

const BorrowedBook = {
  create: (userId, bookId) => knex('borrowed_books').insert({ user_id: userId, book_id: bookId }),
  
  getBorrowedByUser: (userId) => knex('borrowed_books')
    .join('books', 'borrowed_books.book_id', 'books.id')
    .where({ user_id: userId, returned: false })
    .select('borrowed_books.book_id', 'books.name', 'borrowed_books.rating'),

    getPastBorrowedByUser: (userId) => knex('borrowed_books')
    .join('books', 'borrowed_books.book_id', 'books.id')
    .where({ user_id: userId, returned: true })
    .select('borrowed_books.book_id', 'books.name', 'borrowed_books.rating'),

  getPresentBorrowedByUser: (userId) => knex('borrowed_books')
    .join('books', 'borrowed_books.book_id', 'books.id')
    .where({ user_id: userId, returned: false })
    .select('borrowed_books.book_id', 'books.name'),

  returnBook: (userId, bookId, rating) => knex('borrowed_books')
    .where({ user_id: userId, book_id: bookId })
    .update({ returned: true, rating }),
};

module.exports = BorrowedBook;
