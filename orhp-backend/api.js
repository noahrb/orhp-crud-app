import { CosmosClient } from "@azure/cosmos";
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
const port = 3000;

const endpoint = 'https://nbev-cosmos.documents.azure.com:443/';
const key = 'AEq43bbUhBo2NC5MtPVG30kXcMguHetALvU8QXDCMgn602Yu1iiVpPWB7WAIcQ8wGGHal3DgVNekACDb2PArow==';

const cosmosClient = new CosmosClient({ endpoint, key });
const databaseName = `nbev-orhp-test`;

const usersContainer = cosmosClient.database(databaseName).container('users');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*
******** users REST Services ********
*/
// GET /api/users
app.get('/api/users', async (req, res) => {
  const { resources } = await usersContainer.items.readAll().fetchAll();
  res.send(resources);
})
// GET /api/users/:id
app.get('/api/users/:id', async (req, res) => {
  const { resources } = await usersContainer.items.readAll().fetchAll();
  res.send(resources);
})
// POST /api/users
app.post('/api/users', async (req, res) => {
  const { resources } = await usersContainer.items.readAll().fetchAll();
  res.send(resources);
})
// PUT /api/users/:id
app.put('/api/users/:id', async (req, res) => {
  const { resources } = await usersContainer.items.readAll().fetchAll();
  res.send(resources);
})
// DELETE /api/users/:id
app.delete('/api/users/:id', async (req, res) => {
  const { resources } = await usersContainer.items.readAll().fetchAll();
  res.send(resources);
})