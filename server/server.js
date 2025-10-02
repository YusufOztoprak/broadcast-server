const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8000 }, () => {
    console.log("WebSocket server is running on ws://localhost:8000");
});

const connectedClients = [];

wss.on("connection", (ws) => {
    console.log("A new client connected");
    connectedClients.push(ws);

    ws.send("Welcome to the server");

    ws.on("message", (message) => {
        console.log(`Message received: ${message}`);

        connectedClients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on("close", () => {
        console.log("A client disconnected");
        const index = connectedClients.indexOf(ws);
        if (index > -1) connectedClients.splice(index, 1);
    });
});


