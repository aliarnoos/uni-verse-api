// src/index.ts

import express from 'express';
import { Peer } from "peerjs";

const app = express();
const port = process.env.PORT || 3000;
const peer = new Peer("pick-an-id");

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
