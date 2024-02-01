const express = require('express');
const app = express();
const port = 3000;
const knex = require('knex')(require('../knexfile.js').development);

app.get('/', (req, res) => {
  res.send('CIA Home Page');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

/*
-----------------------------------------------------------------------------------------------------
                                        CRUD Operations:
-----------------------------------------------------------------------------------------------------
This is where we will write the CRUD operations for the agents, missions, and contacts tables.
We will use the following HTTP methods to perform the CRUD operations:
- GET: To retrieve data from the database
- POST: To add new data to the database
- PUT: To update existing data in the database
- DELETE: To remove data from the database
-----------------------------------------------------------------------------------------------------
*/

// GET request to retrieve all agents
app.get('/agents', async (req, res) => {
  try {
    const agents = await knex.select('*').from('agents');
    res.json(agents);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while fetching agents' });
  }
});

// POST request to add a new agent
app.post('/agents', async (req, res) => {
  try {
    const agent = req.body;
    const [agent_id] = await knex('agents').insert(agent).returning('agent_id');
    res.status(201).json({ agent_id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while adding the agent' });
  }
});

// PUT request to update an existing agent
app.put('/agents/:id', async (req, res) => {
  try {
    const agent_id = req.params.id;
    const updatedAgent = req.body;
    await knex('agents').where('agent_id', agent_id).update(updatedAgent);
    res.status(200).json({ message: `Agent with ID ${agent_id} updated successfully` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while updating the agent' });
  }
});

// DELETE request to remove an existing agent
app.delete('/agents/:id', async (req, res) => {
  try {
    const agent_id = req.params.id;
    await knex('agents').where('agent_id', agent_id).del();
    res.status(200).json({ message: `Agent with ID ${agent_id} deleted successfully` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while deleting the agent' });
  }
});
// --------------------------------------------------------------------------------------------------

/*
-----------------------------------------------------------------------------------------------------
                  SQL Query to get all agents with their missions and contacts:
-----------------------------------------------------------------------------------------------------
This is where we will write the SQL query to get all agents with their missions and contacts.
We will use the SELECT statement to get the required columns from the agents, assignments, missions,
and contacts tables.
-----------------------------------------------------------------------------------------------------
*/
app.get('/agents', async (req, res) => {
  try {
    const agents = await knex.select('*').from('agents');
    res.json(agents);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while fetching agents' });
  }
});

app.get('/agents-details', async (req, res) => {
  try {
    const agents = await knex('agents')
      .join('assignments', 'agents.agent_id', '=', 'assignments.agent_id')
      .join('missions', 'assignments.mission_id', '=', 'missions.mission_id')
      .join('contacts', 'agents.agent_id', '=', 'contacts.agent_id')
      .join('contacted_agents', 'contacts.contacted_agent_id', '=', 'contacted_agents.contacted_agent_id')
      .join('locations', 'agents.location_id', '=', 'locations.location_id')
      .select('agents.*', 'missions.mission_name', 'contacted_agents.code_name as contacted_agent_code_name', 'locations.country', 'locations.city', 'locations.region');
    res.json(agents);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while fetching agents details' });
  }
});

app.get('/agents-missions', async (req, res) => {
  try {
    const agents = await knex('agents')
      .join('assignments', 'agents.agent_id', '=', 'assignments.agent_id')
      .join('missions', 'assignments.mission_id', '=', 'missions.mission_id')
      .join('contacts', 'agents.agent_id', '=', 'contacts.agent_id')
      .select('agents.*', 'missions.mission_name', 'contacts.contacted_agent_id');
    res.json(agents);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while fetching agents with their missions and contacts' });
  }
});
// -----------------------------------------------------------------------------------------------------