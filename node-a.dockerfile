FROM node:14

COPY . .
RUN npm install

EXPOSE 4011
EXPOSE 5011

ENV DEBUG=libp2p:*

ENTRYPOINT ["node", "./ipfs-node-a.js"]