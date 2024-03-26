import http from "http";
import express from "express";
import path from "path";
import { Server as SocketIO } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new SocketIO(server);

app.use(express.static(path.resolve("./public")));

io.on("connection", (socket) => {
  console.log("Socket Connected", socket.id);
  socket.on('binarystream', stream => {
    console.log('Binary stream incoming');
  })
});

server.listen(3000, () => console.log(`HTTP server is running on port 3000`));
