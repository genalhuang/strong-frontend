const http = require('http');

http.createServer((req,res)=>{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.end('{"inputValue":"111","list":[{"title":"Ant Design Title 1"},{"title":"Ant Design Title 2"},{"title":"Ant Design Title 3"},{"title":"Ant Design Title 4"}]}')
}).listen(3000);
