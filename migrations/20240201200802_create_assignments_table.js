/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('assignments', (table) => {
    table.increments('assignment_id');
    table.integer('mission_id');
    table.integer('agent_id');
    table.date('assignment_date');
    table.date('assignment_completed');
  }).then(() => {
    return knex.schema.alterTable('assignments', (table) => {
      table.foreign('mission_id').references('mission_id').inTable('missions');
      table.foreign('agent_id').references('agent_id').inTable('agents');
    });
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('assignments', table => {
    table.dropForeign('mission_id');
    table.dropForeign('agent_id');
  }).then(() => {
    return knex.schema.dropTableIfExists('assignments');
  });
};
