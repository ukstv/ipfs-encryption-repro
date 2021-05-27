const ipfsHttpClient = require('ipfs-http-client')

async function main() {
    // const client = await ipfsHttpClient.create({url: 'http://localhost:5011'})
    const client = ipfsHttpClient({url: 'http://localhost:5011'})
    // CHANGE PubKey HERE
    const remote = '/ip4/127.0.0.1/tcp/4012/ws/p2p/QmQr6mz3EGjoJWe1MwqweUz7DCxdXJyuUqLWfs14ranAJ1'
    await client.swarm.connect(remote)
    const list = [
        // "/dns4/ipfs-ceramic-public-mainnet-external.ceramic.network/tcp/4012/wss/p2p/QmS2hvoNEfQTwqJC4v6xTvK8FpNR2s6AgDVsTL3unK11Ng",
        // "/dns4/ipfs-ceramic-private-mainnet-external.3boxlabs.com/tcp/4012/wss/p2p/QmXALVsXZwPWTUbsT8G6VVzzgTJaAWRUD7FWL5f7d5ubAL",
        // "/dns4/ipfs-cas-mainnet-external.3boxlabs.com/tcp/4012/wss/p2p/QmUvEKXuorR7YksrVgA7yKGbfjWHuCRisw2cH9iqRVM9P8",
        // "/dns4/ipfs-ceramic-elp-1-1-external.3boxlabs.com/tcp/4012/wss/p2p/QmUiF8Au7wjhAF9BYYMNQRW5KhY7o8fq4RUozzkWvHXQrZ",
        // "/dns4/ipfs-ceramic-elp-1-2-external.3boxlabs.com/tcp/4012/wss/p2p/QmRNw9ZimjSwujzS3euqSYxDW9EHDU5LB3NbLQ5vJ13hwJ"
    ]

    for (let l in list) {
        const entry = list[l]
        console.log('connected', await client.swarm.connect(entry))
    }
    const peers = await client.swarm.peers()
    const peerIds = peers.map(p => p.peer)
    console.log('peers', peerIds)
    await new Promise(resolve => setTimeout(resolve, 100000))
}

main()