FROM node:14

COPY . .
RUN npm install

EXPOSE 4012
EXPOSE 5012

ENV DEBUG=libp2p:*

ENTRYPOINT ["node", "./ipfs-node-b.js"]