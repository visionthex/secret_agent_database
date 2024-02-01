/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('contacts').del()
  await knex('contacts').insert([
    { contact_id: 1, agent_id: 2, contacted_agent_id: 1 },
    { contact_id: 2, agent_id: 3, contacted_agent_id: 4 },
    { contact_id: 3, agent_id: 4, contacted_agent_id: 5 },
    { contact_id: 4, agent_id: 5, contacted_agent_id: 6 },
    { contact_id: 5, agent_id: 6, contacted_agent_id: 7 },
    { contact_id: 6, agent_id: 7, contacted_agent_id: 8 },
    { contact_id: 7, agent_id: 8, contacted_agent_id: 9 },
    { contact_id: 8, agent_id: 9, contacted_agent_id: 10 },
    { contact_id: 9, agent_id: 10, contacted_agent_id: 1 },
    { contact_id: 10, agent_id: 1, contacted_agent_id: 2 }
  ]);
};
