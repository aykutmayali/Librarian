const knex = require('../config/knexfile');

const Book = {
  getAll: () => knex('books').select('id', 'name'),
  getById: (id) => knex('books').where({ id }).first(),
  create: (name) => knex('books').insert({ name }),
  updateRating: (id, rating) => knex('books').where({ id }).update({ average_rating: rating }),
};

module.exports = Book;
