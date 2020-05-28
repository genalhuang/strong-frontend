// 传统语言实现 不好
var setCommend = function (button, command) {
  button.onclick = function () {
    command.excude()
  }
}

var MenuBar = {
  refresh: function () {
    console.log('刷新菜单')
  }
}

var SubMenu = {
  add: function () {
    console.log('增加子菜单')
  },
  del: function () {
    console.log('删除子菜单')
  }
}

var RefreshMenuBarCommand = function (receiver) {
  this.receiver = receiver
}

RefreshMenuBarCommand.prototype.excude = function () {
  this.receiver.refresh()
}

var AddSubMenuCommand = function (receiver) {
  this.receiver = receiver
}

AddSubMenuCommand.prototype.excude = function () {
  this.receiver.add()
}

var refreahMenuBarCommand = new RefreshMenuBarCommand(MenuBar)
var addSubMenuCommand = new AddSubMenuCommand(SubMenu)

setCommend(button1, refreahMenuBarCommand)
setCommend(button2, addSubMenuCommand)

// js实现
var setCommand = function (button, command) {
  button.onclick = function () {
    command.excude()
  }
}

var MenuBar = {
  refresh: function () {
    console.log('刷新菜单界面')
  }
}

var RefreshMenuBarCommand = function (receiver) {
  return {
    excude: function () {
      receiver.refresh()
    }
  }
}

var refreahMenuBarCommand = RefreshMenuBarCommand(MenuBar)
setCommand(button1, refreahMenuBarCommand)