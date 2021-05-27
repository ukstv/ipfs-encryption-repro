const ipfsHttpClient = require('ipfs-http-client')

async function main() {
    const client = await ipfsHttpClient.create({url: 'http://localhost:5012'})
    console.log('id', (await client.id()).id)
    setInterval(async () => {
        console.log('peers', await client.swarm.peers())
    }, 3000)
    await new Promise(resolve => setTimeout(resolve, 10000))
}

main()