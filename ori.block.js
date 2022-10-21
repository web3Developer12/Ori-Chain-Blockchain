class Block {
  
  constructor(){
    this.timeStamp    = Date.now()
    this.index        = 0 
    this.nonce        = 0 
    this.previousHash = ""
    this.hash         = ""
    this.transactions = []
  }
  
  get key(){
    return JSON.stringify(this.transactions) + this.index + this.nonce + this.previousHash
  }
  
  addTransactionToBlock(tx){
    this.transactions.push(tx)
  }
  
} 

module.exports = Block