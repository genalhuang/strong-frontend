// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var longestUnivaluePath = function(root) {
//   debugger
//   if(!root) return 0
//   let min=Infinity,prev=null;
//   function getMin(root){
//       if(!root) return;
//       const {val,left,right}=root
//       //中序遍历
//       getMin(left)
//       if(prev){
//           min=Math.min(min,val-prev.val)
//       }
//       //将prev指向当前结点 
//       prev=root
//       getMin(right)
//   }
//   getMin(root)
//   return min
// };

// TreeNode = {
//   val: 99,
//   left:  {
//     val: 12,
//     left: null,
//     right:   { val: 13, left: null, right: {
//       val: 52,
//       left: {
//         val: 29,
//         left: null,
//         right: null
//       },
//       right: null
//     } }
//   },
//   right:  null
// }

// console.log(longestUnivaluePath(TreeNode))






console.log('start');
setTimeout(() => {               
  console.log(111);
  Promise.resolve(444).then(a=>console.log(a))
}, 0);


setTimeout(() => {               
  console.log(222);
  Promise.resolve(333).then(a=>console.log(a))
}, 0);

