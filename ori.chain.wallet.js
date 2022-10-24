const { generateKeyPairSync } = require('crypto')

class OrichainWallet {

    constructor() {
        this.publicKey  = undefined
        this.privateKey = undefined
        this.getKeys()
    }

    getKeys() {
        const { publicKey, privateKey } = generateKeyPairSync('ec', {
            namedCurve: 'secp256k1',
            publicKeyEncoding: {
                type   : 'spki',
                format : 'der'
            },
            privateKeyEncoding: {
                type   : 'pkcs8',
                format : 'der'
            }
        });
        this.publicKey  =  publicKey.toString('base64')
        this.privateKey =  privateKey.toString('base64')
    }
}


module.exports = OrichainWallet