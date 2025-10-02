const Websocket = require("ws");
const readline = require("readline");

wss = new Websocket("ws://localhost:8000");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ws.on("open",() => {
    console.log("Connected to the server");

    rl.on("line", (input) => {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(input);
        }
    });
});

ws.on("message", (message) => {
    console.log(`Message received: ${message}`);
});

ws.on("close", () => {
    console.log("Client disconnected");
    rl.close();
});

ws.on("error", (err) => {
    console.log("Connection error:", err);
});