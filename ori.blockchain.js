const crypto = require('crypto')
const Block  = require('./ori.block.js')

class Blockchain{
  
  constructor(genesisBlock){
    this.blocks = []
    this.addBlock(genesisBlock)
  }
  
  addBlock(block){
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
      hash = crypto.createHash('sha256').update(block.key).digest('hex')
      console.log(hash)
    }
    return hash
  }

  proofOfWork(transaction){
  
    const nextBlock        = new Block()
    const previousBlock    = this.getPreviousHash()
    nextBlock.index        = previousBlock.index +1
    nextBlock.previousHash = previousBlock.hash
    nextBlock.hash         = this.generateHash(nextBlock)
    
    transaction.forEach((tx_body)=>{
      nextBlock.transactions.push(tx_body)
    })
    
    return nextBlock
  }
  
  getPreviousHash(){
    return this.blocks[this.blocks.length -1]
  }
  
}

module.exports = Blockchain