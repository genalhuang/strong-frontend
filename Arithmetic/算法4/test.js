// // 选择排序
// function SelectSort(arr) {
//   for (let i = 0; i < arr.length-1; i++) {
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         min = j
//       }
//     }
//     let temp = arr[i]
//     arr[i] = arr[min]
//     arr[min] = temp;
//   }
//   return arr
// }
// console.log(SelectSort([1, 3, 5, 2, 4]))


// 插入排序
function InsertSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j - 1] && arr[j] < arr[j - 1]) {
        let temp = arr[j - 1]
        arr[j - 1] = arr[j]
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// console.log(InsertSort([5, 4, 3, 2, 1, 99]))


// 希尔排序
function XierSort(arr) {
  let h = 1;
  while (h < arr.length / 3) {
    h = 3 * h + 1;
  }
  while (h >= 1) {
    for (let i = h; i < arr.length; i++) {
      for (let j = i; j >= h; j -= h) {
        if (arr[j - h] && arr[j] < arr[j - h]) {
          let temp = arr[j - h]
          arr[j - h] = arr[j]
          arr[j] = temp;
        }
      }
    }
    h = Math.floor(h / 3)
  }
  return arr
}


// console.log(XierSort([5, 4, 3, 2, 1, 45,99,3]))



// 归并排序
function merge(leftArr, rightArr) {
  console.log(leftArr, rightArr)
  let result = []
  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift())
    } else {
      result.push(rightArr.shift())
    }
  }
  return result.concat(leftArr).concat(rightArr)
}

function MergeSort(arr) {
  if (arr.length === 1) return arr;
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid);
  let right = arr.slice(mid)
  return merge(MergeSort(left), MergeSort(right))
}

var arr = [12, 32, 36, 45, 56, 76, 78]
// console.log(MergeSort(arr))


// 快速排序
function QuickSort(arr) {
  if (arr.length <= 1) return arr;
  let v = arr[0]
  let leftArr = [];
  let rightArr = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < v) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }
  return QuickSort(leftArr).concat(v, QuickSort(rightArr))
}
var arr = [12, 32, 36, 45, 56, 76, 78]
// console.log(QuickSort(arr))


class MaxPQ {
  constructor() {
    this.pq = [];
    this.n = 0
  }
}

// private void swim(int k) 
// { 
//  while (k > 1 && less(k/2, k)) 
//  { 
//  exch(k/2, k); 
//  k = k/2; 
//  } 
// }
// private void sink(int k) 
// { 
//  while (2*k <= N) 
//  { 
//  int j = 2*k; 
//  if (j < N && less(j, j+1)) j++; 
//  if (!less(k, j)) break; 
//  exch(k, j); 
//  k = j; 
//  } 
// }
// private boolean less(int i, int j) 
// { return pq[i].compareTo(pq[j]) < 0; }
// private void exch(int i, int j) 
// { Key t = pq[i]; pq[i] = pq[j]; pq[j] = t; }
// X T S P L R A M O E E

var arr = [22, 31, 1, 9, 99, 68, 55, 30];
function heap_adjust(arr, start, end) {
  var temp = arr[start],
    j = start * 2;
  for (; j < end; j *= 2) {
    if (arr[j] < arr[j + 1]) {
      j++;
    }
    if (temp > arr[j]) {
      break;
    }
    arr[start] = arr[j];
    start = j;
  }
  arr[start] = temp;
}
function heap_sort(arr) {
  var len = arr.length;
  for (var i = len / 2; i >= 0; i--) {
    heap_adjust(arr, i, len);
  }
  for (var i = len; i > 0; i--) {
    swap(arr, 0, i - 1);
    heap_adjust(arr, 0, i - 2);
  }
}
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
heap_sort(arr)
// console.log(arr);


// 基于二叉查找树的符号表
// class Node {
//   constructor(key, val, n, left, right) {
//     this.key = key;
//     this.val = val;
//     this.left = left;
//     this.right = right;
//     this.n = n;
//   }
// }
class BST {
  constructor(root) {
    this.root = root;

  }

  size(x) {
    if (x) {
      return x.n
    }
    return 0;
  }

  get(x, key) {
    if (!x) return null;
    if (x.key > key) {
      return this.get(x.left, key)
    } else if (x.key < key) {
      return this.get(x.right, key)
    } else {
      return x.val;
    }
  }

  put(x, key, val) {
    if (!x) return new Node(key, val, 1)
    if (x.key > key) {
      x.left = this.put(x.left, key, val)
    } else if (x.key < key) {
      x.right = this.put(x.right, key, val)
    } else {
      x.val = val;
    }
    x.n = this.size(x.left) + this.size(x.right) + 1;
    return x;
  }


  // 查找排名为k的节点
  select(x, k) {
    if (!x) return null;
    var t = this.size(x.left)
    if (t > k) {
      return this.select(x.left, k)
    } else if (t < k) {
      return this.select(x.right, k - t - 1)
    } else {
      return x;
    }
  }

  // 查找节点x的最小节点的键
  min(x) {
    if (x.left == null) return x;
    return this.min(x.left)
  }

  // 删除节点x的最小节点并返回新的x节点
  deleteMin(x) {
    if (x.left == null) return x.right;
    x.left = this.deleteMin(x.left);
    x.n = this.size(x.left) + this.size(x.right) + 1;
    return x;
  }

  delete(x, key) {
    if (x == null) return null;
    if (x.key > key) {
      x.left = this.delete(x.left, key)
    } else if (x.key < key) {
      x.right = this.delete(x.right, key)
    } else {
      if (x.right == null) return x.left;
      if (x.left == null) return x.right;
      let t = x;
      x = this.min(t.right)
      x.right = this.deleteMin(t.right);
      x.left = t.left
    }
    x.n = this.size(x.left) + this.size(x.right) + 1;
    return x;
  }

  print(x) {
    if (!x) return;
    console.log(x.left ? x.left.key : null, x.key, x.right ? x.right.key : null + '\n')

    this.print(x.left)
    this.print(x.right)
  }

  centerPrint(x) {
    if (!x) return;
    this.centerPrint(x.left);
    console.log(x.key);
    this.centerPrint(x.right);
  }
}

// let root = new Node('S', 0, 1)
// let bst = new BST(root)
// bst.put(bst.root, 'E', 1)
// bst.put(bst.root, 'A', 2)
// bst.put(bst.root, 'R', 3)
// bst.put(bst.root, 'C', 4)
// bst.put(bst.root, 'H', 5)
// bst.put(bst.root, 'E', 6)
// bst.put(bst.root, 'X', 7)
// bst.put(bst.root, 'X', 7)
// bst.put(bst.root, 'M', 9)
// console.log(bst.get(bst.root, 'x'))
// bst.print(bst.root)
// console.log(bst.select(bst.root, 1))
// console.log(bst.root)

// 测试删除
// bst.print(bst.root)
// bst.delete(bst.root, 'E')
// bst.print(bst.root)

// 中序遍历
// bst.centerPrint(bst.root)


var RED = true;
var BLACK = false;


class Node {
  constructor(key, val, n, color) {
    this.key = key;
    this.val = val;
    this.n = n;
    this.color = color;
  }
}

class RedBlackBST {
  constructor() {
    this.root = root;
  }

  isRed(h) {
    if(!h) {
      return false;
    }
    return h.color === RED;
  }

  size(x) {
    if (x) {
      return x.n
    }
    return 0;
  }

  rotateLeft(h) {
    let x = h.right;
    h.right = x.left;
    x.left = h;
    x.color = h.color;
    h.color = RED;
    x.n = h.n;
    h.n = 1 + this.size(h.left) + this.size(h.right);
    return x;
  }

  rotateRight(h) {
    let x = h.left;
    h.left = x.right;
    x.right = h;
    x.color = h.color;
    h.color = RED;
    x.n = h.n;
    h.n = 1 + this.size(h.left) + this.size(h.right);
    return x;
  }

  flipColors(h) {
    h.color = RED;
    h.left.color = BLACK;
    h.right.color = BLACK;
  }

  put(h, key, val) {
    if (!h) return new Node(key, val, 1, RED);

    if (h.key > key) {
      h.left = this.put(h.left, key, val);
    } else if (h.key < key) {
      h.right = this.put(h.right, key, val);
    } else {
      h.val = val;
    }

    if (this.isRed(h.right) && !this.isRed(h.left)) {
      h = this.rotateLeft(h);
    } else if (this.isRed(h.left) && this.isRed(h.left.left)) {
      h = this.rotateRight(h);
    } else if (this.isRed(h.left) && this.isRed(h.right)) {
      this.flipColors(h)
    }
    h.n = this.size(h.left) + this.size(h.right) + 1;
    return h;
  }

  centerPrint(x) {
    if (!x) return;
    this.centerPrint(x.left);
    console.log(x.key, x.color);
    this.centerPrint(x.right);
  }
}

// let root = new Node('S', 1, 1, RED);
// let bst = new RedBlackBST(root);
// bst.root = bst.put(bst.root, 'E', 1)
// bst.root = bst.put(bst.root, 'A', 2)
// bst.root = bst.put(bst.root, 'R', 3)
// bst.root = bst.put(bst.root, 'C', 4)
// bst.root = bst.put(bst.root, 'H', 5)
// bst.root = bst.put(bst.root, 'X', 7)
// bst.root = bst.put(bst.root, 'M', 9)
// bst.root = bst.put(bst.root, 'P', 9)
// bst.root = bst.put(bst.root, 'L', 9)

// let root = new Node('C', 1, 1, RED);
// let bst = new RedBlackBST(root);
// bst.root = bst.put(bst.root, 'B', 1)
// bst.root = bst.put(bst.root, 'A', 2)
// bst.root = bst.put(bst.root, 'D', 2)
// bst.root = bst.put(bst.root, 'R', 3)
// bst.root = bst.put(bst.root, 'C', 4)
// bst.root = bst.put(bst.root, 'H', 5)
// bst.root = bst.put(bst.root, 'X', 7)
// bst.root = bst.put(bst.root, 'M', 9)
// bst.root = bst.put(bst.root, 'P', 9)
// bst.root = bst.put(bst.root, 'L', 9)
// bst.centerPrint(bst.root)
// console.log(bst.root)


class Graph {
  constructor(V) {
    this.V = V;
    this.E = 0;
    this.adj = [];
    for(var i=0;i< this.v;i++) {
      this.adj[i] = [];
    }
  }

  addEdge(v, w) {
    this.adj[v].add(w)
    this.adj[w].add(v)
    this.E++;
  }
}