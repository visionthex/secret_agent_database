/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('agents').del()
  await knex('agents').insert([
    { agent_id: 1, code_name: '007', real_name: 'James Bond', specialty: 'Espionage', location_id: 1, status: 'alive' },
    { agent_id: 2, code_name: 'Black Widow', real_name: 'Natasha Romanoff', specialty: 'Undercover Operations', location_id: 2, status: 'alive' },
    { agent_id: 3, code_name: 'Eagle Eye', real_name: 'Sam Fisher', specialty: 'Assassination', location_id: 3, status: 'alive' },
    { agent_id: 4, code_name: 'Phoenix', real_name: 'Jason Bourne', specialty: 'Combat and Survival', location_id: 4, status: 'alive' },
    { agent_id: 5, code_name: 'The Professor', real_name: 'Ethan Hunt', specialty: 'Technology and Gadgets', location_id: 5, status: 'alive' },
    { agent_id: 6, code_name: 'Ghost', real_name: 'John Clark', specialty: 'Special Forces', location_id: 6, status: 'alive' },
    { agent_id: 7, code_name: 'Scarlet', real_name: 'Nikita Mears', specialty: 'Hand-to-Hand Combat', location_id: 7, status: 'alive' },
    { agent_id: 8, code_name: 'Shadow', real_name: 'David Webb', specialty: 'Intelligence Analysis', location_id: 8, status: 'alive' },
    { agent_id: 9, code_name: 'Thunderbolt', real_name: 'Frank Moses', specialty: 'Tactical Operations', location_id: 9, status: 'alive' },
    { agent_id: 10, code_name: 'Cobra', real_name: 'Jack Ryan', specialty: 'Cryptography', location_id: 10, status: 'alive' }
  ]);
};