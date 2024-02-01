/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('contacts', (table) => {
    table.increments('contact_id');
    table.integer('agent_id');
    table.integer('contacted_agent_id');
  }).then(() => {
    return knex.schema.alterTable('contacts', (table) => {
      table.foreign('agent_id').references('agent_id').inTable('agents');
      table.foreign('contacted_agent_id').references('contacted_agent_id').inTable('contacted_agents');
    });
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('contacts', table => {
    table.dropForeign('agent_id');
    table.dropForeign('contacted_agent_id');
  }).then(() => {
    return knex.schema.dropTableIfExists('contacts');
  });
};
