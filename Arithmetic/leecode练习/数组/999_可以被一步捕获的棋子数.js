/**
 * 思路这四个关键点中，重点解释官方是如何处理车在四个方向上的移动这一步的。

首先我们将棋盘抽象成由X（行）和Y（列）组成，则X（行）设定为西——>东方向，Y（列）设定为北——>南方向。即上北，下南，左西，右东，则x表示在X上的位置，y表示在Y上的位置。

很轻易地可以总结出：
(0 + x, 1 + y)：x坐标不变，y前进一格，则是由西向东移动。
(1 + x, 0 + y)：x坐标前进一格，y不变，则是由北向南移动。
(0 + x, -1 + y)：x坐标不变，y后退一格，则是由东向西移动。
(-1 + x, 0 + y)：x坐标后退一格，y不变，则是由南向北移动。
 * 
 */

/**
* @param {character[][]} board
* @return {number}
*/
var numRookCaptures = function (board) {
  let getCount = 0;
  let car = new Array(2)
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === 'R') {
        car = [i, j]
        for (let k = j - 1; k >= 0; k--) {
          if (board[i][k] === 'B') {
            break
          }
          if (board[i][k] === 'p') {
            getCount++
            break
          }
        }
        for (let k = j + 1; k < 8; k++) {
          if (board[i][k] === 'B') {
            break
          }
          if (board[i][k] === 'p') {
            getCount++
            break
          }
        }
      }
    }
  }
  let n = car[1]
  for (let k = car[0]-1; k >= 0; k--) {
    if (board[k][n] === 'B') {
      break
    }
    if (board[k][n] === 'p') {
      getCount++
      break
    }
  }
  for (let k = car[0] + 1; k < 8; k++) {
    if (board[k][n] === 'B') {
      break
    }
    if (board[k][n] === 'p') {
      getCount++
      break
    }
  }
  return getCount
};
console.log(numRookCaptures([[".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", "p", ".", ".", ".", "."], [".", ".", ".", "R", ".", ".", ".", "p"], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", "p", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."]]
))


// 更优解
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  // 捕获量
  let captureAmount = 0;
  // 车的坐标
  let x, y;

  // 声明label
  loop:
  // 遍历棋盘，找到初始状态下车的位置
  for(let i = 0; i < 8; i++) {
      for(let j = 0; j < 8; j++) {
          if (board[i][j] === 'R') {
              // 找到车
              x = i;
              y = j;
              // 利用label来退出最外层循环，减少遍历的数组元素
              break loop;
          }
      }
  }

  // 车在X轴上移动的方位
  const dx = [0, 1, 0, -1];
  // 车在Y轴上移动的方位
  const dy = [1, 0, -1, 0];

  // 外层循环，依次走4个方向
  for(let i = 0; i < 4; i++) {
      // 内层循环，向同一个方向一直走下去
      // 官方这里是从第0步开始走，我觉得没必要还造成浪费，直接从第一步开始走就行了
      for(let j = 1; ; j++) {
          // 车在X轴移动后的坐标
          const moveX = x + j * dx[i];
          // 车在y轴移动后的坐标
          const moveY = y + j * dy[i];

          // 车不能走出棋盘范围 且 不可以碰到象
          if (moveX < 0 || moveX >= 8 || moveY < 0 || moveY >= 8 || board[moveX][moveY] === 'B') {
              break;
          }
          // 捕获到卒
          if (board[moveX][moveY] === 'p') {
              captureAmount++;
              // 题目要求：捕获到小卒后，这个方向就不能在继续前进了
              break;
          }
      }
  }

  // 返回捕获数量
  return captureAmount;
};