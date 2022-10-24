const express         = require('express')
const app             = express()
const Tx              = require('./ori.transaction.js')
const Block           = require(   './ori.block.js'   )
const Blockchain      = require('./ori.blockchain.js' )
const Transaction     = require('./ori.transaction.js')
const BlockchainNode  = require('./ori.node.js')
const fetch           = require('node-fetch')
const axios           = require('axios').default;
const genesisBlock    = new Block()
const ori             = new Blockchain(genesisBlock)
let   PORT            = process.env.PORT
let   transactions    = []
let   allTransactions = []
let   nodes           = []


require('dotenv').config()
app.use(express.json())

const FECTH_BLOCKCHAIN = async(node)=>{

  const response = await fetch(`${node.url}blockchain`)
  const body = await response.json()
  console.log(body)

}
if(process.argv.length > 2){PORT=process.argv[2]}

if(PORT == 8081){

  const init_transac = new Transaction('Robot','Helodie',456)
  const block        = ori.proofOfWork([init_transac])
  ori.addBlock(block)

  const sec_transac = new Transaction('Anna','Helodie',45)
  const secBlock        = ori.proofOfWork([sec_transac])
  ori.addBlock(secBlock)
}
if(PORT == 8080){
  const node    = new BlockchainNode("http://localhost:8081/".trim())
  nodes.push(node)

  const init_transac = new Transaction('Robotaaaa','ruikiii',456)
  const block        = ori.proofOfWork([init_transac])
  ori.addBlock(block)
  allTransactions.push(init_transac)
}

app.get('/blockchain',(_,response)=>{response.json(ori)})

app.post('/nodes/register',(request,response)=>{
  const urls        = request.body.urls
  if(urls.length   != 0){
    urls.forEach(url  => {
      if(url.trim().length !=0){
        const node    = new BlockchainNode(url.trim())
        nodes.push(node)
      }
    })
  }
  response.json(nodes)
})

app.get('/nodes/list',(request,response)=>{
  response.json({
    "numberOfNodes":nodes.length,
    "nodes":nodes
  })
})

app.get('/resolve',(_,response)=>{
  
    nodes.forEach((node)=>{

      FECTH_BLOCKCHAIN(node)
    })

    response.send('Merge Blockchain to one')
})

app.post('/transactions',(request,response)=>{
    const from   = request.body.from
    const to     = request.body.to
    const amount = request.body.amount
    const tx     = new Transaction(from,to,amount)
    transactions.push(tx)
    response.json(transactions)
})

app.get('/transactions/list',(request,response)=>{
  if(transactions.length  == 0){response.json('NO TRANSACTIONS ADDED...')}
  else{response.json(transactions)}
})

app.get('/mine',(_,response)=>{
  if(transactions.length >= 1){
    let block    = ori.proofOfWork(transactions)
    ori.addBlock(block)
    transactions = []
    console.log(`Mining block #${block.index}...`)
    response.json(block)
  }else{response.send('ANY BLOCKS CREATED FOR MINING...')}
})

app.get('/',(_,response)=>{response.json({
  "blockchain": process.env.BLOCKCHAIN_NAME,
  "license"   : process.env.LICENSE,
  "creator"   : process.env.CREATOR
})})

app.listen(PORT,()=>{console.log(`Ori node is running at ${PORT}...`)})
