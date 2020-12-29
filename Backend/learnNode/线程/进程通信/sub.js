process.on('message',function(m) {
  console.log('Child got message', m)
});
process.send({name:'陈冠希'})

