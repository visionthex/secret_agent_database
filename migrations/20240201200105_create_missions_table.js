/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('missions', (table) => {
    table.increments('mission_id');
    table.string('mission_name', 250);
    table.string('mission_description', 250);
    table.integer('location_id');
  }).then(() => {
    return knex.schema.alterTable('missions', (table) => {
      table.foreign('location_id').references('location_id').inTable('locations');
    });
  }
)};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('missions', table => {
    table.dropForeign('location_id');
  }).then(() => {
    return knex.schema.dropTableIfExists('missions');
  });
};
