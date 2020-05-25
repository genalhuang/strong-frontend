var CreateDiv = function(html) {
  this.html = html;
  this.init()
}
CreateDiv.prototype.init = function() {
  var div = document.createElement('div')
  div.innerHTML = this.html
  document.body.appendChild(div)
}

var ProxySingletonCreateDiv = (function() {
  var instance;
  return function(html) {
    if(!instance) {
      instance = new CreateDiv(html)
    }
    return instance
  }
})()