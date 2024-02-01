/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('contacted_agents').del()
  await knex('contacted_agents').insert([
    { contacted_agent_id: 1, code_name: 'Shadow', real_name: 'David Webb', speciality: 'Intelligence Analysis', location_id: 1, status: 'alive' },
    { contacted_agent_id: 2, code_name: 'Eagle Eye', real_name: 'Sam Fisher', speciality: 'Assassination', location_id: 2, status: 'dead' },
    { contacted_agent_id: 3, code_name: 'Phoenix', real_name: 'Jason Bourne', speciality: 'Combat and Survival', location_id: 3, status: 'alive' },
    { contacted_agent_id: 4, code_name: 'Black Widow', real_name: 'Natasha Romanoff', speciality: 'Undercover Operations', location_id: 4, status: 'dead' },
    { contacted_agent_id: 5, code_name: 'The Professor', real_name: 'Ethan Hunt', speciality: 'Technology and Gadgets', location_id: 5, status: 'alive' },
    { contacted_agent_id: 6, code_name: 'Ghost', real_name: 'John Clark', speciality: 'Special Forces', location_id: 6, status: 'dead' },
    { contacted_agent_id: 7, code_name: 'Scarlet', real_name: 'Nikita Mears', speciality: 'Hand-to-Hand Combat', location_id: 7, status: 'alive' },
    { contacted_agent_id: 8, code_name: 'Thunderbolt', real_name: 'Frank Moses', speciality: 'Tactical Operations', location_id: 8, status: 'dead' },
    { contacted_agent_id: 9, code_name: 'Cobra', real_name: 'Jack Ryan', speciality: 'Cryptography', location_id: 9, status: 'alive' },
    { contacted_agent_id: 10, code_name: 'Viper', real_name: 'Sarah Connor', speciality: 'Cyber Warfare', location_id: 10, status: 'dead' }
  ]);
};
