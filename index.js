const { PeerServer } = require("peer");

const port = process.env.PORT || 9000;
const peerServer = PeerServer({ 
    port: port, 
    path: "/",
    proxied: true,
    allow_discovery: true,
    corsOptions: {
        origin: process.env.ALLOWED_ORIGIN
    }
});

// Add basic logging for connections
peerServer.on('connection', (client) => {
    console.log('Client connected:', client.getId());
});

peerServer.on('disconnect', (client) => {
    console.log('Client disconnected:', client.getId());
});

console.log(`PeerServer is running on port: ${port} and allowed origin: ${process.env.ALLOWED_ORIGIN}`);