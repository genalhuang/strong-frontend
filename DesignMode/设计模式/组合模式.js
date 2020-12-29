// var MacroCommand = function() {
//   // 创建一个宏命令对象
//   return {
//     commandsList: [],
//     add: function(command) {
//       this.commandsList.push(command)
//     },
//     execute: function() {
//       for(var i=0;i<this.commandsList.length;i++) {
//         let command = this.commandsList[i]
//         command.execute()
//       }
//     }
//   }
// }

// var ACommand = {
//   execute() {
//     console.log('打开空调')
//   }
// }

// var openTvCommand = {
//   execute() {
//     console.log('打开电视')
//   }
// }
// var openSoundCommand = {
//   execute() {
//     console.log('打开音响')
//   }
// }
// var BCommand = MacroCommand()
// BCommand.add(openTvCommand)
// BCommand.add(openSoundCommand)

// // 通过组合模式组织
// var macroCommand = MacroCommand()
// macroCommand.add(ACommand)
// macroCommand.add(BCommand)

// // 绑定事件
// var setCommand = (function(command) {
//   document.getElementById('button').onclick = function() {
//     command.execute()
//   }
// })(macroCommand)


// 扫描文件夹例子
// 文件件类
// var Folder = function(name) {
//   this.name = name
//   this.files = []
// }
// Folder.prototype.add = function(file) {
//   this.files.push(file)
// }
// Folder.prototype.scan = function() {
//   console.log('开始扫描文件夹: ' + this.name)
//   for(let i=0;i<this.files.length;i++) {
//     var file = this.files[i]
//     file.scan()
//   }
// }

// // 文件类
// var File = function(name) {
//   this.name = name;
// }
// File.prototype.add = function() {
//   console.log('文件类不能添加文件！')
// }
// File.prototype.scan = function() {
//   console.log('开始扫描文件: ' + this.name)
// }

// var folder = new Folder('学习资料')

// var folder1 = new Folder('javascript')

// var folder2 = new Folder('node')

// var file1 = new File('javascript设计模式')
// var file2 = new File('jq太简单')
// var file3 = new File('深入浅出node.js')
// var file4 = new File('深入浅出D3.js')

// folder1.add(file1)
// folder1.add(file2)
// folder2.add(file3)

// folder.add(folder1)
// folder.add(folder2)
// folder.add(file4)

// folder.scan()


// 扫描文件夹案例加一个删除功能
var Folder = function(name) {
  this.name = name;
  this.parent = null;
  this.files = []
}
Folder.prototype.add = function(file) {
  file.parent = this;
  this.files.push(file)
}
Folder.prototype.scan = function() {
  console.log('开始扫描文件夹: ' + this.name)
  for(let i=0;i<this.files.length;i++) {
    var file = this.files[i]
    file.scan()
  }
}
Folder.prototype.remove = function() {
  if(!this.parent) {
    return;
  }
  var file;
  for(let i=0;i<this.parent.files.length;i++) {
    file = this.parent.files[i]
    if(file === this) {
      this.parent.files.splice(i,1)
    }
  }
}

var File = function(name) {
  this.name = name;
  this.parent = null;
}
File.prototype.add = function() {
  throw new Error('文件不能添加文件！')
}
File.prototype.scan = function() {
  console.log('开始扫描文件: ' + this.name)
}
File.prototype.remove = function() {
  if(!this.parent) {
    return;
  }
  var file 
  for(let i=0;i<this.parent.files.length;i++) {
    file = this.parent.files[i]
    if(file === this) {
      this.parent.files.splice(i,1)
    }
  }
}
var folder = new Folder('学习资料')

var folder1 = new Folder('javascript')

var folder2 = new Folder('node')

var file1 = new File('javascript设计模式')
var file2 = new File('jq太简单')
var file3 = new File('深入浅出node.js')

folder1.add(file1)
folder1.add(file2)
folder2.add(file3)

// 测试移除
file2.remove() // 删除jq太简单
folder.add(folder1)
folder.add(folder2)

folder.scan()