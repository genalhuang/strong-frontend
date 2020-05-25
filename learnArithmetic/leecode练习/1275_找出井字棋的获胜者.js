/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
  let myArr = []
  for(let i=0;i<3;i++) {
    myArr.push([0,0,0])
  }
  for(let j=0;j<moves.length;j++) {
    if(j%2 == 0) {
      myArr[moves[j][0]][moves[j][1]] = 1
    } else {
      myArr[moves[j][0]][moves[j][1]] = 2
    }
  }
  return Judge(myArr)
};

console.log(tictactoe([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]))
function Judge(arr) {
  for(let i = 0; i < 3; i++){
    if(arr[i][0] + arr[i][1] + arr[i][2] == 3) return "A";
    if(arr[0][i] + arr[1][i] + arr[2][i] == 3) return "A";
    if((arr[0][0] + arr[1][1] + arr[2][2] == 3) || arr[2][0] + arr[1][1] + arr[0][2] == 3) return "A";
    if(arr[i][0] + arr[i][1] + arr[i][2] == 6) return "B";
    if(arr[0][i] + arr[1][i] + arr[2][i] == 6) return "B";
    if((arr[0][0] + arr[1][1] + arr[2][2] == 6) || arr[2][0] + arr[1][1] + arr[0][2] == 6) return "B";
  }
  if(moves.length == 9) return "Draw"
  return "Pending"
}