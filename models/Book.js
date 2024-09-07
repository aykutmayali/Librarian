const knexConfig = require('../config/knexfile'); // Import knexfile configuration
const Knex = require('knex');  // Import Knex

// Initialize Knex with the configuration
const knex = Knex(knexConfig.development);  // Pass the development config

const Book = {
  getAll: () => knex('books').select('id', 'name'),
  getById: (id) => knex('books').where({ id }).first(),
  create: (name) => knex('books').insert({ name }),
  calculateNewRating: async (bookId) => {
    const ratings = await knex('borrowed_books')
      .where({ book_id: bookId, returned: true })
      .whereNotNull('rating')
      .pluck('rating'); // Get all the ratings for the book

    if (ratings.length === 0) return null; // No ratings available

    const averageRating = ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length;

    return averageRating;
  },
  updateRating: (id, rating) => knex('books').where({ id }).update({ average_rating: rating }),

  };

module.exports = Book;
