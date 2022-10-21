class BlockchainNode{

  constructor(url){
    this.addre
    this.url = url
  }

  nodeIncludes(nodes,node){
    nodes.forEach(node_blockchain => {
      if(node_blockchain.url == node.url){
        return;
      }
    })
    return false
  }
  
}
module.exports = BlockchainNode