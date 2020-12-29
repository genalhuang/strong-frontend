### 简介
😛 闲暇时间想做一个聊天室来巩固前端技能，于是在2020年6月24号就开始了阿童木聊天室的开发之旅。<br>
😈 项目采用全 typescript 开发，这是为了以后的功能迭代打基础。当然，我本身也是很喜欢 typescript 的。

### 项目界面
![](https://github.com/genaller/genal-chat/blob/master/assets/v6_pc.png)

### 功能介绍
- 移动端兼容
- 用户信息的修改(头像/用户名/密码)
- 群聊/私聊
- 创建群/加入群/退群/模糊搜索群
- 添加好友/删好友/模糊搜索用户
- 消息分页
- 表情包
- 图片发送/图片预览
- 在线人数统计
- 自定义主题
- 重连提醒

### 技术概览
- **Typescript**：JavaScript 的一个超集，它最大的优势是提供了类型系统和提高了代码的可读性和可维护性。
- **Vue2.6.x**：前端渐进式框架。
- **Socket/io**：实现实时通信，websocket 第三方库。
- **Vuex**：专为 Vue.js 应用程序开发的状态管理模式。
- **Nestjs**：是一个用于构建高效、可扩展的 Node.js 服务端应用框架，基于 TypeScript 编写并且结合了 OOP1、FP2、FRP3 的相关理念。
- **Typeorm**: 支持最新的 JavaScript 特性并提供额外的特性以帮助你开发任何使用数据库的应用程序。
- **ES6+**：采用 ES6+ 语法，箭头函数、async/await 等等语法很好用。
- **SASS(SCSS)**：用 SCSS 做 CSS 预处理语言，可以使用最高效的方式，以少量的代码创建复杂的设计。

### 为什么使用 typescript 
1. 由于聊天室涉及比较复杂的数据结构, 使用 typescript 可以在开发过程中通过编译器的提醒规避掉很多低级错误。
2. 有了typescript的类型定义，系统数据结构一目了然，代码可维护性和可读性大大提高。

### 数据库表结构设计
数据库使用了六张表，分别是
- user 用户表
- group 群表 
- user_group 用户_群中间表
- group_message 群消息表
- user_friend 用户_好友中间表
- friend_message 私聊消息表

其中中间表用于建立对于群/好友与用户之间的联系。下面是我画的思维导图，相信大家看完就能理解其中的奥妙啦。<br>

![](./database.png)


### WebSocket的建立逻辑
#### 用户房间的建立
每个用户进入聊天室都会自动加入名为 public 的 WebSocket 房间和以用户 id 为命名的 WebSocket 房间，其中建立用户房间是为了方便系统针对用户单独广播事件。如果不了解房间的概念，可以认为只有房间内的人才能接收到房间内的广播，更多信息请移步 socket.io 官网。

#### 群聊房间的建立
以 groupId 作为 WebSocket 房间的名字，每次有新用户加入群都会在群房间内广播用户进群事件并附带上新用户的详细信息，然后其他用户会存储新用户的信息。当新用户发消息的时候，其他用户收到消息后可以通过消息的userId找到对应用户的详细信息。这样能保证消息发出后其他用户能够快速知道消息的主人.

#### 私聊房间的建立
每当发起一个添加好友的请求，就会把用户的 userId 和好友的 userId 拼接成的字符串作为 WebSocket 的房间名，从而建立私聊房间。

### 后端架构
后端使用了 nestjs 这个近几年发展迅猛的 node.js 框架。nestjs 的优势有很多， 我只列举出以下几点：
1. 基于 TypeScript 构建，同时兼容普通的 ES6。
2. nestjs 的依赖注入以及模块化的思想，使得代码结构清晰，便于维护。
3. nestjs 的 @nestjs/websockets 包封装好了对于 WebSocket 事件的处理，对于开发聊天室有很大优势。
 
下面是一些后端的逻辑代码。
1. 使用 nestjs 建立 WebSocket 连接
```js
// chat.gateway.ts
@WebSocketGateway()
export class ChatGateway {
  // socket连接钩子
  async handleConnection(client: Socket): Promise<string> {
    let userRoom = client.handshake.query.userId;
    // 连接默认加入public房间
    client.join('public');
    // 用户独有消息房间 根据userId
    if(userRoom) {
      client.join(userRoom);
    }
    return '连接成功'
  }
}
```
2. 封装全局的中间件，方便在开发过程中调试。
```js
// middleware.js
export function logger(req, res, next) {
  const { method, path } = req;
  console.log(`${method} ${path}`);
  next();
};

// main.js 
使用全局中间件
app.use(logger)
```
3. nestjs 的静态资源配置
```js
// main.js
配置静态资源
app.useStaticAssets(join(__dirname, '../public/', 'static'), {
  prefix: '/static/', 
});
```
4. nestjs 自定义异常过滤器
```js
// http-exception.filter.ts
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();
    const exceptionRes: any = exception.getResponse();
    const {
      error,
      message,
    } = exceptionRes;
    // 以下格式将在请求错误时返回给前端
    response.status(status).json({
      status,
      timestamp: new Date().toISOString(),
      path: request.url,
      error,
      message,
    });
  }
}
```

### 前端架构
#### 页面初始化
初始化会调起 WebSocket 连接函数，然后拿到用户所有的群信息和所有的好友信息，再通过建立 WebSocket 通信的规则加入到对应的房间，然后使用 vuex 派发最新的数据。
#### 数据处理
群的数据类型
```js
// 群组
interface Group {
  groupId: string;
  userId: string; // 群主id
  groupName: string;
  notice: string;
  messages: GroupMessage[];
  createTime: number;
}
```
好友的数据类型
```js
// 好友
interface Friend {
  userId: string;
  username: string;
  avatar: string;
  role?: string;
  tag?: string;
  messages: FriendMessage[];
  createTime: number;
}
```
我曾经用对象数组 [ friend1 , friend2 ... ] 这样的结构去管理所有的 群/好友 数据，但是当数据量很大的时候，查询和更新 群/好友 数据会变得很消耗性能。每次好友名字变了或者头像变了就得遍历查找一遍数组才能更新相应信息。 <br>
后来我用对象的结构，优化了聊天室的代码。我使用一个对象 gather 来管理 群/好友 的信息， gather 的键为 groupId/userId ，值为对应的 群/好友 的数据，结构如下
```js
gather = {
 'userId': {
   userId: 'userId'
   username: 'xxx'
   messages: [];
   ...
 }
}
```
每个群和用户都有独一无二的 id，所以无需担心重复。使用这样的结构后，更新数据便非常的轻松，只需要拿到需要更新的id，然后直接覆盖 gather.id 对应的值就行了

### vuex
聊天室涉及到数据的即时更新和各个 vue 组件的数据同步，处理这样的业务场景是 vuex 的强项。 我把建立 WebSocket 连接的函数写在了 vuex 的 action 中，在用户登录成功后调起连接函数，下面是精简后的代码。
```js
// actions.ts
const actions: ActionTree<ChatState, RootState> = {
  // 初始化WebSocket
  async connectSocket({commit, state, dispatch, rootState}, callback) {
    // WebSocket连接建立
    socket.on('connect', async () => {
      // 订阅群消息时间
      socket.on('groupMessage', (res: any) => {
        console.log('on groupMessage', res)
        if (!res.code) {
          // 对群消息进行处理
          commit(ADD_GROUP_MESSAGE, res.data)
        }
      })
    }
  }
```
不得不说 vuex-class 这个库帮了我很大的忙，它是 vuex 结合 typescript 开发的很好的粘合剂。
使用了 vuex-class ，那么在 vue 组件中调用 vuex 的方法只需要这么写：
```js
// GenalChat.vue
import { namespace } from 'vuex-class'
const appModule = namespace('app')
export default class GenalChat extends Vue {
  @appModule.Getter('user') user: User;
  @appModule.Action('login') login: Function;
}
```
### 总结
&emsp;&emsp;目前聊天室已经具备完整的聊天功能，同时，我今后也会陆续开发更多酷炫的功能，喜欢的朋友给个 star 鼓励一下我吧！

### 项目地址
github： [genal-chat](https://github.com/genaller/genal-chat)







