/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('borrowed_books', function(table) {
        table.increments('id');
        table.integer('user_id').unsigned().references('id').inTable('users');
        table.integer('book_id').unsigned().references('id').inTable('books');
        table.integer('rating').defaultTo(null);
        table.boolean('returned').defaultTo(false);
        table.timestamps(true, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('borrowed_books');
};
