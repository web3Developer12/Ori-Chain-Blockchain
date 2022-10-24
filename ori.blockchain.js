const crypto = require('crypto')
const Block  = require('./ori.block.js')

class Blockchain{
  #pendingTransactions
  constructor(genesisBlock){
    this.blocks              = [genesisBlock]
    this.#pendingTransactions = []
  }
  
  addBlock(block){

    const previousBlock    = this.getPreviousHash()
    if(block.previousHash != previousBlock.hash){
      throw new Error(`
        logs-[Orichain][${Date.now()}] cannot add invalid blocks to the blockchain
      `)
      return;
    }

    if(this.blocks.length == 0){
      block.previousHash = "000000000000000"
      block.hash         = this.generateHash(block)
    }
    this.blocks.push(block)
  }
  

  generateHash(block){
    let hash =crypto.createHash('sha256').update(block.key).digest('hex')
    while(!hash.startsWith("0000")){
      block.nonce+=1
      hash        = crypto.createHash('sha256').update(block.key).digest('hex')
      console.log(hash)
    }
    return hash
  }

  proofOfWork(transactions){
  
    const nextBlock        = new Block()
    const previousBlock    = this.getPreviousHash()
    nextBlock.index        = previousBlock.index +1
    nextBlock.previousHash = previousBlock.hash
    nextBlock.hash         = this.generateHash(nextBlock)
    
    transactions.forEach((transaction)=>{

      if(transaction.signature != undefined){
        nextBlock.transactions.push(transaction)
      }else{
        console.log('Cannot add unsigned transaction to the blockchain')
      }
    })
    
    return nextBlock
  }

  balanceOf(publicKey){
    const balance = 0
    for(const block in this.blocks){
      for(const tx in block.transactions){
        if(tx.fromAddress == publicKey){
          balance -= tx.amount
        }
        if(tx.toAddress == publicKey){
          balance += tx.amount
        }
      }
    }
    return balance
  }
  
  getPreviousHash(){
    return this.blocks[this.blocks.length -1]
  }
  
}

module.exports = Blockchain