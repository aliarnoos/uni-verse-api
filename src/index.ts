import express from 'express';
import { Peer } from "peerjs";
import { createOnlineUsersTable } from './dev/devUtils';

const app = express();
const port = process.env.PORT || 3000;
const peer = new Peer("pick-an-id");

// This function is called in development only!
createOnlineUsersTable()

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
