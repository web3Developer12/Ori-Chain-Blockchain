const crypto = require('crypto')

class Transaction {

  constructor(_from,_to,_amount){
    this.fromAddress   = _from
    this.toAddress     = _to
    this.amount        = _amount
    this._timeStamp    = Date.now()
    this.hash          = undefined
    this.generateTransactionHash()
  }

  generateTransactionHash(){
    this.hash = crypto.createHash('sha256').update(
      this.fromAddress + this.toAddress + this.amount + this._timeStamp
    ).digest('hex')
  }

  signTransaction(signinKeys){

    if(signinKeys.publicKey  == undefined  || 
       signinKeys.privateKey == undefined  ||
       signinKeys.publicKey  != this.fromAddress
    ){
      throw new Error(`
        logs-[Orichain][${Date.now()}] cannot sign the transaction
      `)
      return ;
    }
    let privateKey = signinKeys.privateKey
    privateKey     = crypto.createPrivateKey({

      key    : Buffer.from(privateKey,'base64'),
      type   : 'pkcs8',
      format : 'der'
    })

    const sign = crypto.createSign('SHA256')
    sign.update(this.hash)
    sign.end()
    this.signature = sign.sign(privateKey).toString('base64')    
  }

  verifySignTransaction(signinKeys){

    let publicKey = signinKeys.publicKey

    publicKey     = crypto.createPublicKey({
      key    : Buffer.from(publicKey,'base64'),
      type   : 'spki',
      format : 'der'
    })

    const testing = crypto.createVerify("SHA256")
    testing.update(this.hash)
    testing.end()
    let res       = testing.verify(publicKey,Buffer.from(
      this.signature,'base64'
    ))
    return res

  }
}

module.exports = Transaction