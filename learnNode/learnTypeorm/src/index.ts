// import "reflect-metadata";
// import {createConnection} from "typeorm";
// import {User, blogs} from "./entity/User";

// createConnection().then(async connection => {

//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;

//     // 对mysql的处理
//     // const blog = new blogs()
//     // blog.author='陳冠希typeorm2'
//     // blog.title='asdfasd2'
//     // blog.content= 'adsfasdf2'
//     // blog.createtime=1112
//     // blog.id=1
//     // await connection.manager.save(blog)
//     // let blog1 = await connection.manager.find(blogs)
//     // console.log(blog1)

//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));



import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Photo } from './entity/User'
import { connect } from 'net';

createConnection({
  type:'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'myblog',
  entities: [Photo],
  synchronize: true,
  logging: false
}).then(connection => {
  let p = new Photo()
  p.name = '陈冠希'
  p.isPublished = true
  p.filename='genal'
  p.description='u盘'
  p.views=111
  connection.manager.save(p)
  console.log(connection.manager.find('1'))

})
.catch(error => console.log(error))

