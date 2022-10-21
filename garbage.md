app.get('/resolve',(_,response)=>{
  
    nodes.forEach((node)=>{
      
      fetch(`http://${node.url}blockchain`).then(res=>res.json())
      .then(_blockchain=>{
        
          if(ori.blocks.length < _blockchain.blocks.length){
            console.log('Start Merging')
            allTransactions.forEach((transactionOnCurrentBlockchain)=>{
               /**ADD MY TRANSACTIONS TO ALL OTHER NODES AND MINE THEM ON OTHER NODES*/
               fetch(`http://${node.url}transactions`,{
                 method :'POST',
                 headers:{'Content-Type':'application/json',
                 body   :JSON.stringify(transactionOnCurrentBlockchain)}
               }).then(result=>{
                 /**START THE MINING IN OTHER NODES */
                 fetch(`http://${node.url}mine`).then(miningResponse=>miningResponse.json())
                 .then(_=>{
                   /**FINALLY YOU HAVE TO FETCH THE BLOCKCHAIN */
                   fetch(`http://${node.url}blockchain`).then(chainResponse=>chainResponse.json())
                   .then(updatedBlockchain=>{
                     blockchain= updatedBlockchain
                   })
                 })

               })
            })

          }
      })
    })

    response.send('Merge Blockchain to one')
})