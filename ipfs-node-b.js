const ipfs = require('ipfs-core')
const  HttpApi = require('ipfs-http-server')

const host = '0.0.0.0'
const wsPort = 4012
const apiPort = 5012

async function main() {
    const node = await ipfs.create({
        repo: './data-b',
        preload: {
            enabled: false
        },
        config: {
            Addresses: {
                Swarm: [
                    `/ip4/${host}/tcp/${wsPort}/ws`,
                ],
                API: `/ip4/${host}/tcp/${apiPort}`
            },
            Discovery: {
                MDNS: {
                    Enabled: false,
                    Interval: 10
                },
                webRTCStar: {
                    Enabled: false
                }
            },
            Bootstrap: []
        }
    })
    const api = new HttpApi(node)
    await api.start()
    console.log('api', api.apiAddr)
    setInterval(async () => {
        console.log('swarm', await node.swarm.peers())
    }, 2000)
}

main()