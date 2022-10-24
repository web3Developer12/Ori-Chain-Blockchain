const Blockchain         = require('./ori.blockchain')
const Block              = require('./ori.block')
const OrichainWallet     = require('./ori.chain.wallet')
const Transaction        = require('./ori.transaction')

const wallet             = new OrichainWallet()
const genesisBlock       = new Block()
const oriChainBlockchain = new Blockchain(genesisBlock)
const tx                 = new Transaction(wallet.publicKey,'hex(Address)',12)   
const tx_gen             = new Transaction(wallet.publicKey,'hex(Address)',23) 
const tx_ji              = new Transaction(wallet.publicKey,'hex(Address)',113) 
const tx_h               = new Transaction(wallet.publicKey,wallet.publicKey,33) 

tx    .signTransaction(wallet)
tx_gen.signTransaction(wallet)
tx_ji .signTransaction(wallet)
tx_h  .signTransaction(wallet)

if(tx.verifySignTransaction(wallet)    && tx_gen.verifySignTransaction(wallet)&&
   tx_ji.verifySignTransaction(wallet) && tx_h.verifySignTransaction(wallet) 
){
    let block            = oriChainBlockchain.proofOfWork([tx,tx_gen,tx_ji,tx_h])
    oriChainBlockchain.addBlock(block)
}

console.log(`Balance of ${wallet.publicKey} is ${oriChainBlockchain.balanceOf(wallet.publicKey)}`)








