/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('assignments').del()
  await knex('assignments').insert([
    { assignment_id: 1, mission_id: 1, agent_id: 1, assignment_date: '2023-01-01', assignment_completed: '2023-01-03' },
    { assignment_id: 2, mission_id: 2, agent_id: 2, assignment_date: '2023-02-10', assignment_completed: '2023-02-15' },
    { assignment_id: 3, mission_id: 3, agent_id: 3, assignment_date: '2023-03-20', assignment_completed: '2023-03-25' },
    { assignment_id: 4, mission_id: 4, agent_id: 4, assignment_date: '2023-04-05', assignment_completed: '2023-04-10' },
    { assignment_id: 5, mission_id: 5, agent_id: 5, assignment_date: '2023-05-15', assignment_completed: '2023-05-20' },
    { assignment_id: 6, mission_id: 6, agent_id: 6, assignment_date: '2023-06-25', assignment_completed: '2023-07-01' },
    { assignment_id: 7, mission_id: 7, agent_id: 7, assignment_date: '2023-07-10', assignment_completed: '2023-07-15' },
    { assignment_id: 8, mission_id: 8, agent_id: 8, assignment_date: '2023-08-20', assignment_completed: '2023-08-25' },
    { assignment_id: 9, mission_id: 9, agent_id: 9, assignment_date: '2023-09-05', assignment_completed: '2023-09-10' },
    { assignment_id: 10, mission_id: 10, agent_id: 10, assignment_date: '2023-10-15', assignment_completed: '2023-10-20' }
  ]);
};
