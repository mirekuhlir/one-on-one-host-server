const { PeerServer } = require("peer");

const port = process.env.PORT || 9000;
const peerServer = PeerServer({ 
    port: port, 
    path: "/one-on-one",
    proxied: true 
});

console.log(`PeerServer is running on port: ${port}`);