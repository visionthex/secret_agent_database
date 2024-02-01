/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('contacted_agents', (table) => {
    table.increments('contacted_agent_id');
    table.string('code_name', 250);
    table.string('real_name', 250);
    table.string('speciality', 250);
    table.integer('location_id');
    table.string('status', 5).defaultTo('alive');
  }).then(() => {
    return knex.schema.alterTable('contacted_agents', (table) => {
      table.foreign('location_id').references('location_id').inTable('locations');
    });
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('contacted_agents', table => {
    table.dropForeign('location_id');
  }).then(() => {
    return knex.schema.dropTableIfExists('contacted_agents');
  });
};
