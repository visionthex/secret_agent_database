/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('locations', (table) => {
    table.increments('location_id');
    table.string('country', 250);
    table.string('city', 250);
    table.string('region', 250);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('locations');
};
