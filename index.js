const { PeerServer } = require("peer");

const port = process.env.PORT || 9000;
PeerServer({ 
    port: port, 
    path: "/",
    proxied: true,
    corsOptions: {
        origin: process.env.ALLOWED_ORIGIN
    }
});

console.log(`PeerServer is running on port: ${port}`);