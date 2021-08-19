const data = [
  {
    name: 'a',
    children: [{
      name: 'a1',
      children: [{
        name: 'a11'
      }, {
        name: 'a12'
      }]
    },
    {
      name: 'a2',
      children: [{
        name: 'a21'
      }, {
        name: 'a22'
      }]
    },
    {
      name: 'a3',
      children: [{
        name: 'a31'
      }, {
        name: 'a32'
      }]
    },
    ],
  },
  {
    name: 'b',
    children: [{
      name: 'b1',
      children: [{
        name: 'b11'
      }, {
        name: 'b12'
      }]
    },
    {
      name: 'b2',
      children: [{
        name: 'b21'
      }, {
        name: 'b22'
      }]
    },
    {
      name: 'b3',
      children: [{
        name: 'b31'
      }, {
        name: 'b32'
      }]
    },
    ],
  }
];

// 深度优先遍历
// function dfs(node) {
//   node.forEach(item => {
//     console.log(item.name)
//     if(item.children) {
//       dfs(item.children)
//     }
//   })
// }
// dfs(data)

// 广度优先遍历
function bfs(node) {
  let arr = node
  while (arr.length > 0) {
    debugger
    [...arr].forEach(item => {
      console.log(item.name, 111)
      arr.shift()
      if (item.children) {
        arr.push(...item.children)
      }
    })
    console.log(arr);
  }
}

bfs(data)