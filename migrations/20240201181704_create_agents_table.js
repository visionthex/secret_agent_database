/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('agents', (table) => {
    table.increments('agent_id');
    table.string('code_name', 250);
    table.string('real_name', 250);
    table.string('specialty', 250);
    table.integer('location_id');
    table.string('status', 5).defaultTo('alive');
  })
  .then(() => {
    return knex.schema.alterTable('agents', (table) => {
      table.foreign('location_id').references('location_id').inTable('locations');
    });
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('agents', table => {
    table.dropForeign('location_id');
  })
  .then(() => {
    return knex.schema.dropTableIfExists('agents');
  });
};
