/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// import { turquoise } from "color-name";

// import { forestgreen } from "color-name";

// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */

// public static void reversetList(HeroNode head) {
//   if(head.next == null || head.next.next == null) {
//     return ;
//   }
//   // 定义一个辅助指针，帮助我们遍历原来的链表
//   HeroNode cur = head.next;
//   HeroNode next = null; //指向当前节点的下一个节点；
//   HeroNode reverseHead = new HeroNode(0,"","");
//   // 遍历原来的链表
//   while(cur != null) {
//     next = cur.next;
//     cur.next = reverseHead.next;
//     reverseHead.next = cur;
//     cur = next
//   }
//   head.next = reverseHead.next;
// }

// var reverseList = function(head) {
//   prev = {
//     next: null
//   }
//   while(head) {
//     let temp = head.next
//     head.next = prev.next;
//     prev.next = head;
//     head = temp
//   }
//   return prev.next
// };

// const a = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val:3,
//       next: {
//         val:4,
//         next: {
//           val:5,
//           next:null
//         }
//       }
//     }
//   }
// }

// console.log(reverseList(a))
// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
// let arr=[]
// var fib = function(N) {
//   if(arr[N]){
//     return arr[N]
//   }
//   let result;
//   if(N < 2) {
//     return N;
//   } else {
//     result = fib(N-1) + fib(N-2)
//   }
//   arr[N] = result
//   return result
// };
// console.log(fib(6))

// var climbStairs = function(n) {
//   let max2 = parseInt(n/2);
//   let max1 = parseInt(n);
//   let rest = n;
//   let count = 0;
//   if(n < 4) {
//     return n
//   }
//   if(rest > 0) {

//   }
// };


// const a = {
//     val: 5,
//     next: {
//       val: 4,
//       next: {
//         val:3,
//         next: {
//           val:2,
//           next: {
//             val:1,
//             next:null
//           }
//         }
//       }
//     }
//   }

// console.time('testForEach1');
// var arr1=[]
// arr1[0]=0
// arr1[1]=1;
// arr1[2]=1;
// for(let i=3;i<10100;i++){
//   arr1[i]=arr1[i-1]+arr1[i-2]
// }

// console.timeEnd('testForEach1');
// console.time('testForEach');
// var fib = function(N) {
//   if(N < 3) {
//     return N;
//   } 
//   return fib(N-1) + fib(N-2)
// };
// console.log(fib(47))
// console.timeEnd('testForEach');


// arr=[]
// function sortArr(arr) {
//   if(arr.length==0) {
//     return -1;
//   }
//   let sum = 0;
//   for(let i =0;i<arr.length;i++) {
//     sum += arr[i]
//   }
//   let leftCount =0;
//   let rightCount = 0;
//   for(let j =0;j<arr.length;j++) {
//     if(j==0) {
//       leftCount = 0;
//     }else {
//       leftCount += arr[j-1]
//     }
//     rightCount = sum - leftCount - arr[j];
//     if(leftCount==rightCount){
//       return j;
//     }
//   }
// }
// console.log(sortArr(arr))


// /**
//  * @param {number} x
//  * @return {number}
//  */
// var mySqrt = function(x) {
//   let left = 0;
//   let right = x;
//   let result = 0;
//   let middle = 0;
//   while(left<=right) {
//     middle = Math.floor((left+right)/2);
//     if(middle * middle <= x) {
//       result = middle;
//       left = middle + 1;
//     } else {
//       right = middle - 1;
//     }
//   }
//   return result;
// };
// console.log(mySqrt(100))


// let nums = [1,0];

// var dominantIndex = function(nums) {
//   let maxIndex = 0;
//   let max = -1;
//   let demax = -1;
//   for(let i=0;i<nums.length;i++) {
//     if(nums[i]>max) {
//       demax = max;
//       maxIndex = i;
//       max = nums[i];
//     } else if(nums[i] > demax) {
//       demax = nums[i]
//     }
//   }
//   if(max >= 2*demax) {
//     return maxIndex
//   } else {
//     return -1;
//   }
// };
// console.log(dominantIndex(nums))

// for(let i = 11; i >= 0; i-- ){
//   break
// }

// var plusOne = function(digits) {
//   let flag = false;
//   for(let i = digits.length-1; i >= 0; i-- ){
    
//       if(digits[i] + 1 < 10){
//           digits[i]++;
//           flag = false;
//           break;
//       }else{
//           digits[i] = 0;
//           flag = true;
//       }
//   }
//   if(flag){
//       digits[0] = 1;
//       digits.push(0);
//   }
//   return digits;
// };
// console.log(plusOne([3,2,3,4,5,6,6,7,7,7,7,7,7,7,7,8,9]))



//给定一个含有 M x N 个元素的矩阵（M 行，N 列），
//请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。
// var findDiagonalOrder = function(matrix) {
//   let m = matrix.length;
//   let n = matrix[0].length;
//   let arr = []
//   for(let i=0;i<m;i++) {
//     for(let j=1;j<=n;j++) {
//       if(i==0){
//         arr.push(matrix[0][0]);
//       } else {
//         let max = i + j;
//         if(i/2==0) {

//         } else {

//         }
//       }
//     }
//   }

//   return arr
//   // 33 s
//   // 00 01 10 20 11 02 12 21 22 
// };
// console.log(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]))

// */ 判斷 
// var sumNums = function(n) {

// };


// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
// var generateParenthesis = function(n) {
//   let arr = [];

//   add(str,left,right) {
    
//   }
//   add('(',0,0)

// };



// 环形链表 II
// 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

// 说明：不允许修改给定的链表。


// var detectCycle = function(head) {
//   if (!head || !head.next) return null;
//   detectCycle(head.next)
// };

// var a = {
//   val: 1,
//   next: ''
// }
// var b = {
//   val: 2,
//   next: ''
// }
// var c = {
//   val: 2,
//   next: ''
// }
// a.next = b
// b.next = c;
// c.next = b

// console.log(detectCycle(a))

// var findJudge = function(N, trust) {

//   let arr=[]
//   for(let i=0;i<N;i++){
//     arr.push({
//       in:0,
//       out:0
//     })
//   }
//   let a;
//   let b;
//   for(let j=0;j<trust.length;j++) {
//     a=trust[j][0];
//     b=trust[j][1];
//     arr[a-1].out++
//     arr[b-1].in++
//   }
//   for(let k =0;k<N;k++) {
//     if(arr[k].in===N-1&&arr[k].out===0){
//       return k  + 1;
//     }
//   }
//   return -1;
// };
// console.log(findJudge(4,[[1,3],[1,4],[2,3],[2,4],[4,3]]))


// var numRookCaptures = function(board) {
//   // 得到车的地址
//   // 车在x方向的垃圾
//   // 车在y
// };

// board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]
// numRookCaptures(board)



// var MinStack = function(x) {
//     this.arr= x || []
// };

// MinStack.prototype.push = function(x) {
//    this.arr.push(x);
//    console.log(this)
// };

// MinStack.prototype.pop = function() {
//     this.arr.pop()
// };

// MinStack.prototype.top = function() {
//   return this.arr[this.arr.length-1]
// };

// MinStack.prototype.getMin = function() {
//   let min = this.arr[0];
//   for(let i =0;i<this.arr.length;i++) {
//       if(this.arr[i] < min) {
//           min = this.arr[i]
//       }
//   }
//   return min
// };

//  var obj = new MinStack()
// obj.push(-2)
// obj.push(0)
// obj.push(-1)
// console.log(obj.getMin())
// console.log(obj.top())
// console.log(obj.pop())
// console.log(obj.getMin())


// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。
//  （即逐层地，从左到右访问所有节点）。
// let arr =[]
// let index = 0

// var levelOrder = function(root) {
//   if(root == null) {
//     return ;
//   } 
//   arr.push({
//     length: index,
//     val: root.val
//   })
//   if(root.left !== null) {
//     index++;
//     levelOrder(root.left)
//   }
//   if(root.right !== null) {
//     levelOrder(root.right)
//   }
//   let myarr = []

//   for(let i=0;i<arr.length;i++) {
//     if(myarr[arr[i].length] == undefined) {
//       myarr[arr[i].length] = []
//     }
//     myarr[arr[i].length].push(arr[i].val)
//   }

//   return myarr
// };

// // let treeNode = {
// //   val: 3,
// //   left: {
// //     val: 9,
// //     left: null,
// //     right: null
// //   },
// //   right: {
// //     val: 20,
// //     left: {
// //       val: 15,
// //       left: null,
// //       right: null
// //     },
// //     right: {
// //       val: 7,
// //       left: null,
// //       right: null
// //     }
// //   }
// // }
// // // return [[1],[2,3],[4,5]]
// // console.log(levelOrder({val:1,left:null,right:null}))

// let treeNode = {
//   val: 3,
//   left: {
//       val: 9,
//       left: null,
//       right: {
//         val: 10,
//         left: null,
//         right: null
//       }
//   },
//   right: {
//       val: 20,
//       left: {
//           val: 15,
//           left: null,
//           right: null
//       },
//       right: {
//           val: 7,
//           left: null,
//           right: {
//             val: 8,
//             left: null
//           }
//       }
//   }
// }
// const result = []
// function getResult(trees){
//   console.log(trees)
// if(trees == undefined || trees.length == 0) {
//   return []
// }
//   if(Object.prototype.toString.call(trees) != "[object Array]") {
//     trees = [trees];

// }    

//   const floor = []
//   const nextFloor = []
//   trees.forEach(item => {
//       floor.push(item.val)
//       if(item.left) nextFloor.push(item.left)
//       if(item.right) nextFloor.push(item.right)
//   })
//   result.push(floor)
//   if(nextFloor.length !== 0) getResult(nextFloor)
//   else console.log('层序遍历结果：',result)
//   return result;
// }
// console.log(getResult([1]))

// let arr = []
// var climbStairs = function(n) {
//   if(n <= 2) {
//       return n
//   }
//   arr[n-1] = climbStairs(n-1)
//   if(arr[n]) {
//     return arr[n]
//   }
//   return climbStairs(n-1) + climbStairs(n-2)
// };

// console.log(climbStairs(1000))


// 最大子序和
// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 示例:

// 输入: [-2,1,-3,4,-1,2,1,-5,4],
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
// 进阶:

// 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxSubArray = function(nums) {
//   let ans = nums[0];
//   let sum = 0;
//   for(const num of nums) {
//       if(sum > 0) {
//           sum += num;
//       } else {
//           sum = num;
//       }
//       ans = ans>sum?ans:sum;
//   }
//   return ans;
// };
// console.log(maxSubArray([6,3,4,5,2,-1,-6]))


// var generateParenthesis = function (n) {
//   let res = [];
//   //  cur :当前字符  left：当前字符左括号 right:当前字符右括号
//   const help = (cur, left, right) => {
//     if (cur.length === 2 * n) {
//       res.push(cur);
//       return;
//     }
//     if (left < n) {
//       console.log(left,'left')
//       help(cur + "(", left + 1, right)
//     }
//     if (right < left) {
//       console.log(right,'right')
//       help(cur + ")", left, right + 1);
//     }
//   };
//   help("", 0, 0);
//   return res;
// };


// console.log(generateParenthesis(3))



// function rob(arr) {
//   if(arr.length ==0) {
//     return 0;
//   }
//   if(arr.length == 1) {
//     return arr[i]
//   }
//   let dp=[]
//   dp[0] = arr[0],
//   dp[1] = Math.max(dp[0],arr[1])
//   for(let i=2;i<arr.length;i++) {
//     dp[i] = Math.max(arr[i]+dp[i-2],dp[i-1])
//   }
//   return dp[dp.length-1]
// }
// console.log(rob([5,1,6,3,7,1]))

// function maxSubArray(arr) {
//   let dp = []
//   dp[0] = arr[0];
//   let max = dp[0];
//   for(let i=1;i<arr.length;i++) {
//     dp[i] = Math.max(dp[i-1] + arr[i],arr[i]);
//     if(max < dp[i]) {
//       max=dp[i];
//     }
//   }
//   return max;
// }
// console.log(maxSubArray([5,1,6,3,7,1]))

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxSubArray = function(nums) {
//   if(nums.length == 0) {
//     return nums[0]
//   }
//   let dp = [];
//   dp[0] = nums[0]
//   let max = dp[0]
//   for(let i=1;i<nums.length;i++) {
//     dp[i] = Math.max(nums[i] + dp[i-1],nums[i])
//     if(dp[i] > max) {
//       max = dp[i]
//     }
//   }
//   return max;
// };
// console.log(maxSubArray([1,2]))
// 5






// Fizz Buzz

// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// var fizzBuzz = function(n) {
//   let arr =[]
//   for(let i=1;i<n+1;i++) {
//     if(i%5==0 && i%3==0) {
//       arr.push('FizzBuzz')
//     }else if(i%3==0) {
//       arr.push('Fizz')
//     }else if(i%5==0) {
//       arr.push('Buzz')
//     } else {
//       arr.push(String(i))
//     }
//   }
//   return arr
// };
// console.log(fizzBuzz(3))

// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isPowerOfThree = function(n) {
//   let left = 0;
//   let right = n/2;

// };


// 合并两个有序数组
// 给你两个有序整数数组
// nums1 和 nums2，请你将 nums2 合并到 nums1 中，
// 使 nums1 成为一个有序数组。

// var merge = function(nums1, m, nums2, n) {
//   let l =0;
//   let r = 0;
//   let arr = [];
//   while(l < m && r < n) {
//     if(nums1[l]<nums2[r]) {
//       arr.push(nums1[l])
//       l++
//     } else {
//       arr.push(nums2[r])
//       r++
//     }
//   }
//   if(l>=m) {
//     for(let j=0;j<n-r;j++) {
//       arr.push(nums2[r+j])
//       console.log(1,j)
//     } 
//   } else if(r>=n) {
//     for(let j=0;j<m-l;j++) {
//       arr.push(nums1[m+j])
//       console.log(2)
//     } 

//   }
//   for(let i = 0;i < arr.length;i++){
//     nums1[i] = arr[i];
//   }
// };
// let nums1 = [1,2,3,0,0,0]
// merge(nums1,3,[2,5,6],3)
// console.log(nums1)


function coinChange(coins,amount) {
  let dp = []
  for(let k=0;k<=amount;k++) {
    dp.push(-1)// 设置所有金额不可达
  }
  dp[0] = 0;//金额0最优解0
  for(let i=1;i<=amount;i++) {
    for(let j=0;j<coins.length;j++) {
      if(i-coins[j] >= 0 && dp[i-coins[j]] != -1) {
        if(dp[i] == -1 || dp[i] > dp[i-coins[j]] + 1) {
          dp[i] = dp[i-coins[j]] + 1;
        }
      }
    }
  }
  return dp[amount]
}

console.log(coinChange([1,2,5,7,10],11))
