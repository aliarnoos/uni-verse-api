import express from 'express';
import { createOnlineUsersTable } from './dev/devUtils';
import http from 'http';
import { Server } from 'socket.io';
import { getOnlineUsers } from './services/dynamoDBservice';


const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = new Server(server);

// This function is called in development only!
createOnlineUsersTable()


io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  const sendOnlineUsers = async () => {
    const onlineUsers = await getOnlineUsers();
    const connectionIds = onlineUsers.map(user => user.connectionId);
    socket.emit('update', connectionIds);
  };

  sendOnlineUsers();


  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
