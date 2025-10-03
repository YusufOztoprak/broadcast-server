# Broadcast Server

A simple WebSocket-based broadcast server that allows multiple clients to connect and exchange real-time messages.

## Features

* Start a WebSocket server (default: `localhost:3000`)
* Manage connected clients in memory
* Broadcast incoming messages from one client to all connected clients
* Handle client disconnections gracefully
* Simple CLI interface

## Installation

```bash
git clone https://github.com/YusufOztoprak/broadcast-server
cd broadcast-server
npm install
```

## Usage

### Start the server

```bash
broadcast-server start
```

### Connect a client

```bash
broadcast-server connect
```

When connected, the client will:

* Receive a welcome message from the server
* Be able to send messages that are broadcast to all other clients

## Project Structure

```
broadcast-server/
├── bin/
│   └── broadcast-server.js  # CLI entry point
├── server/
│   └── server.js            # WebSocket server implementation
├── client.js                # Simple WebSocket client
├── package.json             # Project configuration
└── README.md                # Project documentation
```

## License

This project is licensed under the MIT License.
You are free to use, modify, and distribute this software as long as the original license and copyright notice are included.
