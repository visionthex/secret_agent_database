/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('missions').del()
  await knex('missions').insert([
    { mission_id: 1, mission_name: 'Operation Red Sparrow', mission_description: 'Infiltrate enemy intelligence network', location_id: 1 },
    { mission_id: 2, mission_name: 'Operation Silent Night', mission_description: 'Assassinate high-profile target', location_id: 2 },
    { mission_id: 3, mission_name: 'Operation Dark Horizon', mission_description: 'Retrieve classified documents', location_id: 3 },
    { mission_id: 4, mission_name: 'Operation Midnight Sun', mission_description: 'Sabotage enemy communication lines', location_id: 4 },
    { mission_id: 5, mission_name: 'Operation Ghost Protocol', mission_description: 'Neutralize terrorist threat', location_id: 5 },
    { mission_id: 6, mission_name: 'Operation Blackout', mission_description: 'Disrupt enemy power grid', location_id: 6 },
    { mission_id: 7, mission_name: 'Operation Crimson Tide', mission_description: 'Secure nuclear warheads', location_id: 7 },
    { mission_id: 8, mission_name: 'Operation White Dragon', mission_description: 'Extract high-value asset', location_id: 8 },
    { mission_id: 9, mission_name: 'Operation Blue Thunder', mission_description: 'Intercept enemy communications', location_id: 9 },
    { mission_id: 10, mission_name: 'Operation Golden Eagle', mission_description: 'Destroy enemy weapon cache', location_id: 10 }
  ]);
};
