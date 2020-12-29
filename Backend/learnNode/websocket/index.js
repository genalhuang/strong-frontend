const ws = require('ws')
const fs = require('fs')
// let writer = fs.createWriteStream('./data.js')
var websocketServer = new ws.Server({
  port: 3000
})
var clientList = [];
var id = 0;
websocketServer.on('connection', (client) => {
  client.id = 'name' + id++;
  clientList[id] = client;
  client.send('welcome to node Websocket Project');
  client.on('message', (msg) => {
    boardcast(client.id + ':' + msg)
  })
  client.on('close', () => {
    boardcast(client.id + '下线啦');
    delete clientList[client.id];
  })
})
 
function boardcast(msg) {
  for (let prop in clientList) {
    clientList[prop].send(msg)
  }
}