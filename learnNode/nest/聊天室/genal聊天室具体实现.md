### 简介
😛 闲暇时间想做一个聊天室复盘一下这些年学习到的技术,于是在2020年6月24号就开始了Genal聊天室的开发之旅.
😈 项目采用全typescript开发,这是为了以后的功能迭代打基础.当然,我本身也是很喜欢typescript的.

### 项目界面
![](./genal.gif)

### 功能介绍
- 更改用户名/头像上传
- 群聊/私聊
- 创建群/加入群聊/模糊搜索群
- 添加好友/模糊搜索好友
- 表情包
- 消息分页

### 所用技术
```
前端: vue + vue-router + vuex + typescript + socket.io + antd

后端: nestjs + @nestjs/websockets + typescript + typeorm
```

### 数据库表结构设计
数据库使用了六张表,分别是user用户表, group群表, user_group用户_群中间表,group_message群消息表,user_friend用户_好友中间表, friend_message私聊消息表.
其中中间表用于建立对于群/好友与用户之间的联系.下面是我画的思维导图,相信大家看完就能理解其中的奥妙啦.
![](./database.png)


### socket的建立逻辑
#### 用户的socket建立
每个用户进入聊天室都会自动加入public聊天组,并且每个用户都会进入由用户id为名字的socket房间,那么做是为了单独广播给某个用户从而进行一些操作.如果不了解socket房间的概念,可以认为只有房间内的人才能接收到房间的广播,或者也可以看一下socket.io官网.

#### 群聊socket的建立
以groupId作为socket房间的名字, 每次有新用户加入群,都会在群房间内广播用户进群事件,然后其他用户会存储好新用户的信息.当新用户发消息的时候,就可以通过消息的userId找到对应用户的详细信息,这样保障消息发送的速度.

#### 私聊socket的建立
每当发起一个添加好友的请求,就会把用户userId和好友的userId拼接成一个字符串作为socket的房间名,从而建立socket私聊房间.

### 后端架构
后端使用了nestjs这个近几年发展迅猛的node.js框架, 不仅仅是因为其使用typescript进行开发,nestjs的依赖注入以及模块化的思想，使得代码结构清晰，便于维护. 同时nestjs的@nestjs/websockets包也已经封装好了对于socket事件的处理.下面是一些后端的逻辑代码.
我在聊天室的后端代码封装了全局的中间件,方便在开发过程中调试.
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
nestjs的静态资源配置也是非常简单
```js
// main.js
配置静态资源
app.useStaticAssets(join(__dirname, '../public/', 'static'), {
  prefix: '/static/', 
});
```
当请求错误时,nestjs还能自定义异常过滤器
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
    // 以下格式将在发生错误是返回给前端
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

### 前端
#### 页面初始化
初始化会拿到用户所有的群信息GroupArr和所有的好友信息FriendArr, 通过建立socket房间的规则加入到对应的socket房间,然后使用vuex派发最新的数据.
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
&emsp;&emsp;我曾经用对象数组 [Friends1, friend2] 这样的结构去管理所有的群和所有的好友数据,但是稍微动一下脑筋就知道,这样的结构非常不利于查询/更新.每次用户的好友名字变了或者头像变了就得遍历查找一遍数组才能更新相应信息. 
&emsp;&emsp;后来我用对象的结构,优化了聊天室的代码.我使用一个对象gather来管理群组/好友的信息, gather的键为groupId/userId, 值为对应的群/好友的信息,结构如下
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
每个群和用户都有独一无二的id,所以无需担心重复.使用这样的结构后,更新数据便非常的轻松,只需要拿到需要更新的id,然后直接覆盖gather.id对应的值就行了

### vuex
聊天室涉及到数据的即时更新和各个vue组件的数据同步,处理这样的业务场景是vuex的强项. 我把socket的初始化函数写在了vuex的action中,在用户登录成功后调起连接函数,下面是精简后的前端初始化socket的代码.
```js
// actions.ts
const actions: ActionTree<ChatState, RootState> = {
  // 初始化socket
  async connectSocket({commit, state, dispatch, rootState}, callback) {
    // socket连接建立
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
不得不说vuex-class这个库帮了我很大的忙, 它是vuex结合typescript开发的很好的粘合剂.
使用了vuex-class,那么在vue组件中调用vuex的方法只需要这么写:
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
&emsp;&emsp;目前聊天室已经完成日常聊天的基础功能,因为聊天室的数据结构基本都大同小异,因此目前的聊天室架构是非常利于在此基础上进行扩展和新增功能的.同时,我今后也会陆续开发很多酷炫的功能,喜欢的朋友给个star鼓励一下我吧!

### 项目地址
github: [genal-chat](https://github.com/genaller/genal-chat)







