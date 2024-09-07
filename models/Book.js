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

  // Update searchBooks to handle the 'query' and return matching books
  searchBooks: (query) => {
    return knex('books')
      .where('name', 'like', `%${query}%`) // Search for books with a name that contains the query
      .select('id', 'name');  // Only return id and name fields
  }
};

module.exports = Book;
