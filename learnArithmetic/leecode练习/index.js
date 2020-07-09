/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  let arr = new Array(num_people).fill(0)
  let jiechen=0;
  let index = 0;
  let shengyu = 0;
  while(candies >= 0) {
    candies -= ++index
    jiechen++
  }
  shengyu = jiechen + candies
  for(var i=0;i<jiechen-1;i++) {
    arr[i%num_people] += i+1
  }
  arr[(jiechen-1)%num_people] += shengyu
};

console.log(distributeCandies(3,4))