// 传统语言实现
var performanceS = function(){};
performanceS.prototype.calculate = function(salary) {
  return salary * 4;
}
var performanceA = function(){};
performanceA.prototype.calculate = function(salary) {
  return salary * 3;
}
var performanceB = function(){};
performanceB.prototype.calculate = function(salary) {
  return salary * 2;
}

var Bouns = function() {
  this.salary = null;
  this.strategy = null;
}
Bouns.prototype.setSalary = function(salary) {
  this.salary = salary
}
Bouns.prototype.setStrategy = function(strategy) {
  this.strategy = strategy
}
Bouns.prototype.getBouns = function() {
  if(!this.strategy) {
    throw new Error('未设置strategy属性')
  }
  return this.strategy.calculate(this.salary);
}

var bouns = new Bouns()
bouns.setSalary(1000)
bouns.setStrategy(new performanceS())
console.log(bouns.getBouns())

// js基础实现
var strategies = {
  'S': function(salary) {
    return salary * 4;
  },
  'A': function(salary) {
    return salary * 3
  },
  "B": function(salary) {
    return salary * 2
  }
}

var calculateBouns = function() {
  return strategies[level](salary)
}

// 策略模式完成表单校验
var strategies  = {
  isNotEmpty: function(value,errorMsg) {
    if(value === '') {
      return errorMsg
    }
  },
  minLength: function(value,length,errorMsg) {
    if(value.length < length) {
      return errorMsg
    }
  },
  isMobile: function(value,errorMsg) {
    if(/1/.text(value)) {
      return errorMsg
    }
  }
}

var Validator = function() {
  this.cache = []
}

Validator.prototype.add = function(dom,rule,errorMsg) {
  var ary = rule.split(':');
  this.cache.push(function() {
    var strategy = ary.shift();
    ary.unshift(dom.value)
    ary.push(errorMsg)
    return strategies[strategy].apply(dom,ary);
  })
}

Validator.prototype.start = function() {
  for(var i=0,validatorFunc;validatorFunc = this.cache[i++];) {
    var msg = validatorFunc();
    if(msg) {
      return msg
    }
  }
}

var validatorFunc = function() {
  var validator = new Validator()
  validator.add(registerFrom.username,'isNotEmpty','用户名不能为空')
  var errorMsg = validator.start()
  return errorMsg
}

var registerFrom = document.getElementById('registerForm')
registerFrom.onsubmit = function() {
  var errorMsg = validatorFunc()
  if(errorMsg) {
    alert(errorMsg)
    return false;
  }
}