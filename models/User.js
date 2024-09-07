const knexConfig = require('../config/knexfile'); // Import knexfile configuration
const Knex = require('knex');  // Import Knex

// Initialize Knex with the configuration
const knex = Knex(knexConfig.development);  // Pass the development config

const User = {
  getAll: () => knex('users').select('id', 'name'),
  getById: (id) => knex('users').where({ id }).first(),
  create: (name) => knex('users').insert({ name }),
};

module.exports = User;
