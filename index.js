const webSocket = require("ws");

const server = new webSocket.Server({ port: "8080" });

server.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("message", (message) => {
    socket.send(`We received your ${message}`);
  });

  socket.on("close", (event) => {
    console.log("Client disconnected");
  });
});

console.log("socket initialized on port 8080");
