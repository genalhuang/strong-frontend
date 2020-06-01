function Player(name, teamColor) {
  this.name = name;
  this.teamColor = teamColor;
  this.state = 'alive'
}
Player.prototype.win = function () {
  console.log(this.name + ' won ')
}
Player.prototype.lose = function () {
  console.log(this.name + ' lost')
}
Player.prototype.die = function () {
  this.state = 'dead';
  playerDirector.ReceiveMessage('playerDead', this)
}
Player.prototype.remove = function () {
  playerDirector.ReceiveMessage('removePlayer', this)
}

Player.prototype.changeTeam = function (color) {
  playerDirector.ReceiveMessage('changeTeam', this, color)
}

var PlayerFactory = function(name,teamColor) {
  var newPlayer = new Player(name,teamColor)
  playerDirector.ReceiveMessage('addPlayer',newPlayer)
  return newPlayer
}

var playerDirector = (function () {
  var players = {}
  var operations = {}

  operations.addPlayer = function (player) {
    var teamColor = player.teamColor;
    players[teamColor] = players[teamColor] || [];
    players[teamColor].push(player)
  }
  operations.removePlayer = function (player) {
    var teamColor = player.teamColor
    var teamPlayers = players[teamColor] || []
    for (var i = 0; i < teamPlayers.length; i++) {
      if (teamPlayers[i] === player) {
        teamPlayers.splice(i, 1)
      }
    }
  }
  operations.changeTeam = function (player, newTeamColor) {
    operations.removePlayer(player)
    player.teamColor = newTeamColor
    operations.addPlayer(player)
  }
  operations.playerDead = function (player) {
    var teamColor = player.teamColor;
    var teamPlayers = players[teamColor]
    var all_dead = true;
    for (var i = 0; i < teamPlayers.length; i++) {
      if (teamPlayers[i].state != 'dead') {
        all_dead = false
        break;
      }
    }
    if (all_dead === true) {
      for (var i = 0; i < teamPlayers.length; i++) {
        teamPlayers[i].lose()
      }
      for (var color in players) {
        if (color != teamColor) {
          var teamPlayers = players[color]
          for (var i = 0; i < teamPlayers.length; i++) {
            teamPlayers[i].win()
          }
        }
      }
    }
  }

  var ReceiveMessage = function() {
    var message = Array.prototype.shift.call(arguments)
    operations[message].apply(this,arguments)
  }
  return {
    ReceiveMessage
  }
})()

var player1 = PlayerFactory('皮蛋','red')
var player2 = PlayerFactory('二狗','red')
var player3 = PlayerFactory('散弹','blue')
var player4 = PlayerFactory('鸡脖','blue')

 

// player1.remove()
// player2.die()

// player1.changeTeam('green')
// player2.die()