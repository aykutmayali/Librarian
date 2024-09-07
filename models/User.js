const knex = require('../config/knexfile');

const User = {
  getAll: () => knex('users').select('id', 'name'),
  getById: (id) => knex('users').where({ id }).first(),
  create: (name) => knex('users').insert({ name }),
};

module.exports = User;
