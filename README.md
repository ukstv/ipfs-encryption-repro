# ERR_ENCRYPTION_FAILED Repro

Steps:
1. `npm install`
2. Open terminal window (A), and run there `npm run node:a`
3. Open terminal window (B), and run there `npm run node:b`
4. Here note IPFS peer id
5. In `run-a.js` change current peer id with yours.
4. Open terminal window (C), and run `node run-a.js`. This will make node A connect to node B.
5. After some time you will see on both A and B windows peer list instead of empty `swarm[]`.
6. Stop node on terminal B and start it again.

After some time node A will try to connect to node B, and here you will see a message about failed XX handshake.
On node B (inbound connection) it tells `inbound connection failed to upgrade Error: Error occurred during XX handshake: Value is null`.
On node A (outbound connection) it tells `Failed to upgrade outbound connection Error: Error occurred during XX handshake: The operation was aborted`.