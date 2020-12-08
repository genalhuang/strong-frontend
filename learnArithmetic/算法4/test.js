class QuickUnion {
  constructor(num) {
    this.id = []
    this.count = num;
    for (let i = 0; i < num; i++) {
      this.id[i] = i;
    }
  }

  getCount() {
    return this.count;
  }
  
  find(p) {
    while(p != this.id[p]) {
      p = this.id[p]
    }
    return p;
  }

  union(p, q) {
    let pRoot = this.find(p);
    let qRoot = this.find(q);
    if(pRoot == qRoot) return

    this.id[pRoot] = qRoot;
    this.count--;
  }
  
  conntected(p, q) {
    return this.find(p) === this.find(q)
  }
}

let un = new QuickUnion(10)
un.union(4,3)
un.union(3,8)
un.union(6,5)
un.union(9,4)
un.union(2,1)
un.union(8,9)
un.union(5,0)
un.union(7,2)
un.union(6,1)
un.union(1,0)
un.union(5,9)

console.log(un.id, un.conntected(3,7), un.getCount())