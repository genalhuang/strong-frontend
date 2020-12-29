let MongoClient = require('mongodb').MongoClient;
let Config = require('./config.js')

// 单例模式(优化多个db连接的性能)
// 加
// 防止重复连接（优化一个db中多次连接性能） 优化配置数据库连接
class DB {

  static getInstance() {
    if (!DB.instance) {
      DB.instance = new DB()
    }
    return DB.instance
  }

  constructor() {
    this.dbClient = '';
    this.connect();// 实例化的时候就开始连接数据库
  }

  connect() {
    return new Promise((resolve, reject) => {
      if (!this.dbClient) {// 解决数据库多次连接的问题
        MongoClient.connect(Config.dbUrl, (err, client) => {
          if (err) reject(err);
          this.dbClient = client.db(Config.dbName)
          resolve(this.dbClient)
        })
      } else {
        resolve(this.dbClient)
      }
    })

  }

  find(collectionName, json) {
    return new Promise((resolve, reject) => {
      this.connect().then((db) => {
        let result = db.collection(collectionName).find(json)
        result.toArray((err, res) => {
          if (err) return reject(err);
          resolve(res)
        })
      })
    })
  }

  insert(collectionName, json) {
    return new Promise((resolve, reject) => {
      this.connect().then(db => {
        db.collection(collectionName).insertOne(json, (err, res) => {
          if (err) return reject(err);
          resolve(res)
        })
      })
    })
  }

  update(collectionName, json1, json2) {
    return new Promise((resolve, reject) => {
      this.connect().then(db => {
        db.collection(collectionName).updateOne(json1, {
          $set: json2
        }, (err, res) => {
          if (err) return reject(err);
          resolve(res)
        })
      })
    })
  }

  remove(collectionName, json) {
    return new Promise((resolve, reject) => {
      this.connect().then(db => {
        db.collection(collectionName).removeOne(json, (err, res) => {
          if (err) return reject(err);
          resolve(res)
        })
      })
    })
  }
}


module.exports = DB.getInstance()

// 多次连接
// var myDb = new DB()
// console.time('start')
// myDb.find('user',{username: '陈冠希'}).then(data=>{
//   console.log(data)
//   console.timeEnd('start')
// })
// setTimeout(()=>{
//   console.time('start1')
//   myDb.find('user',{username: '陈冠希'}).then(data=>{
//     console.log(data)
//     console.timeEnd('start1')
//   })
// },200)



// 多个实例
// var myDb = DB.getInstance()
// console.time('start')
// myDb.find('user',{username: '陈冠希'}).then(data=>{
//   console.log(data)
//   console.timeEnd('start')
// })
// setTimeout(()=>{
//   let myDb2 = DB.getInstance()
//   console.time('start2')
//   myDb2.find('user',{username: '陈冠希'}).then(data=>{
//     console.log(data)
//     console.timeEnd('start2')
//   })
// },200)
