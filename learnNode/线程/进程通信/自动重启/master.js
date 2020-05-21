// var fork = require('child_process').fork
// var cpus = require('os').cpus()

// var server = require('net').createServer();
// server.listen(8000);

// var workers = {};
// var createWorker = function() {
//   var worker = fork(__dirname + '/worker.js');
//   // 当一个进程退出，那么再创建一个子进程
//   worker.on('exit', function() {
//     console.log('Worker' + worker.pid + 'exited.')
//     delete workers[worker.pid];
//     createWorker()
//   })
//   worker.send('server', server);
//   workers[worker.pid] = worker;
//   console.log('Create worker.pid :' + worker.pid);
// }
// for(var i = 0; i< cpus.length; i++) {
//   createWorker()
// }

// process.on('exit', function() {
//   for(var pid in workers) {
//     workers[pid].kill()
//   }
// })


// 自杀信号 这样处理比上面好， 因为收到消息先创建了替补子进程，而不是等子进程退出再创建
var fork = require('child_process').fork
var cpus = require('os').cpus()

var server = require('net').createServer();
server.listen(8000);

var workers = {};
var createWorker = function() {
  var worker = fork(__dirname + '/worker.js');
  worker.on('message', function(message) {
    if(message.act === 'suicide') {
      createWorker()
    }
  })
  worker.send('server', server);
  workers[worker.pid] = worker;
  console.log('Create worker.pid :' + worker.pid);
  worker.on('exit', function() {
    console.log('worker ' + worker.pid + 'exited.');
    delete workers[worker.pid]
  })
}

for(var i = 0; i< cpus.length; i++) {
  createWorker()
}

// 当前进程也就是主进程退出，那么全部子进程退出
process.on('exit', function() {
  for(var pid in workers) {
    workers[pid].kill()
  }
})