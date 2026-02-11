const { PeerServer } = require("peer");

const port = process.env.PORT || 9000;
const allowedOrigins = process.env.ALLOWED_ORIGIN ? process.env.ALLOWED_ORIGIN.split(',').map(origin => origin.trim()) : [];

PeerServer({ 
    port: port, 
    path: "/",
    proxied: true,
    corsOptions: {
        origin: allowedOrigins
    }
});

console.log(`PeerServer is running on port: ${port}`);