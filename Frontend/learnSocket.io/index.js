const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By",' 3.2.1')
//   if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
//   else  next();
// });
app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/index.html')
})
http.listen(3000, ()=>{
  console.log('listen: 3000')
})


// // 连接事件
// // io.on('connection', (socket)=>{
// //   // console.log(socket)
// //   console.log('id', socket.id)
// //   console.log('a user connected')
// //   断连事件
// //   socket.on('disconnect',()=>{
// //     console.log('a user disconnected')
// //   })
// // })

// // io.on('connection',(socket)=>{
// //   // 自定义事件
// //   socket.on('chat message',(msg)=>{
// //       console.log('message:'+msg)
// //   })
// //   socket.broadcast.emit('hi')
// // })

// io.on('connection',(socket)=>{
//   socket.on('chat message',(msg)=>{
//       io.emit('chat message',msg)
//   })
// })

    
// emit方法除了第一个参数是事件名称 ， 后面的都是回调的参数
// <script>
// const socket= io()
// socket.on('connect',()=>{
//     socket.emit('ferrect','tobi','woot',(data)=>{
//         console.log(data)//应该是 'tobi says woot'
//     })
// })
// </script>
// const io= require('socket.io')(80)
// io.on('connection',socket=>{
//     socket.on('ferret',(name,word,fn)=>{
//         fn(name+'says'+word)
//     })
// })


// 广播消息
// const io = require('socket.io')(80)
// io.on('connection',(socket)=>{
//     socket.broadcast.emit('user connected')
//     socket.broadcast.to('socketId').emit('hi',"hi") //给指定人发送
// })

// 自定义命名空间
// 要设置自定义命名空间，可以在服务端调用of函数
// const nsp= io.of('/my-namespace');
// nsp.on('connection',(socket)=>{
//     console.log('some connected')
// })
// nsp.emit('hi','everyone')

// io
// .of('genal')
// .on('connection', (socket)=>{
//   console.log('id', socket.id)
//   console.log('a user connected')
//   socket.on('disconnect',()=>{
//     console.log('a user disconnected')
//   })

//   socket.emit('message')

// })


// // 加入频道 join 离开频道 leave
// io.on('connection',socket=>{
//   socket.join('genal')
//   // to和in是一样的
//   // io.sockets.to('genal').emit('message')
//   // io.sockets.in('genal').emit('message')

//   socket.leave('genal')

//   // 注意sockets来自io对象
//   // io.sockets.to(房间名称、用户id) 发送给该房间所有客户端
//   io.sockets.to('genal').emit('message', 'nice game');
// })    

// io.on('connection', (socket) => {
//   socket.join('room 237', () => {
//     let rooms = Object.keys(socket.rooms);
//     console.log(rooms); // [ <socket.id>, 'room 237' ]
//   });
// });


// 加入频道 join 离开频道 leave
// 每个用户都会自动加入以自身id命名的房间
// let idArr = []
// io.on('connection',socket=>{
//   idArr.push(socket.id)
//   console.log(idArr)
//   socket.on('say to someone', (id,msg)=>{
//     io.sockets.to(idArr[0]).emit('my message', msg)
//   })
// })    


// 获取连接到客户端的id
// io.on('connection',socket=>{
//   io.clients((error, clients) => {
//     if (error) throw error;
//     console.log(clients); // => [PZDoMHjiu8PYfRiKAAAF, Anw2LatarvGVVXEIAAAD]
//   });
// })


// setTimeout(()=>{
//   io.clients((error, clients) => {
//     if (error) throw error;
//     console.log(clients); // => [PZDoMHjiu8PYfRiKAAAF, Anw2LatarvGVVXEIAAAD]
//   });
// },10)

// io.on('connection', (socket) => {
//   // socket.join('room 237', () => {
//   //   let rooms = Object.keys(socket.rooms);
//   //   console.log(rooms); // [ <socket.id>, 'room 237' ]
//   // });
//   // 握手细节
//   console.log(socket.handshake)
// });



io.on('connection', (socket) => {
  // 是否跟随数据包将被压缩
  socket.compress(false).emit('uncompressed', "that's rough");
});