/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('locations').del()
  await knex('locations').insert([
    { location_id: 1, country: 'United States', city: 'Washington D.C.', region: 'North America' },
    { location_id: 2, country: 'Mexico', city: 'Mexico City', region: 'North America' },
    { location_id: 3, country: 'Canada', city: 'Ottawa', region: 'North America' },
    { location_id: 4, country: 'England', city: 'London', region: 'Europe' },
    { location_id: 5, country: 'Russia', city: 'Moscow', region: 'Europe' },
    { location_id: 6, country: 'France', city: 'Paris', region: 'Europe' },
    { location_id: 7, country: 'Germany', city: 'Berlin', region: 'Europe' },
    { location_id: 8, country: 'Italy', city: 'Rome', region: 'Europe' },
    { location_id: 9, country: 'Spain', city: 'Madrid', region: 'Europe' },
    { location_id: 10, country: 'Greece', city: 'Athens', region: 'Europe' },
    { location_id: 11, country: 'China', city: 'Beijing', region: 'Asia' },
    { location_id: 12, country: 'India', city: 'New Delhi', region: 'Asia' },
    { location_id: 13, country: 'Japan', city: 'Tokyo', region: 'Asia' },
    { location_id: 14, country: 'South Korea', city: 'Seoul', region: 'Asia' },
    { location_id: 15, country: 'Brazil', city: 'Rio de Janeiro', region: 'South America' },
    { location_id: 16, country: 'Australia', city: 'Sydney', region: 'Australia' },
    { location_id: 17, country: 'South Africa', city: 'Cape Town', region: 'Africa' },
    { location_id: 18, country: 'Egypt', city: 'Cairo', region: 'Africa' }
  ]);
};
