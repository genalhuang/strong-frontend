var intersect = function(nums1, nums2) {
  let short;
  let long;
  let arr = []
  if(nums1.length > nums2.length) {
    short = nums2
    long = nums1
  } else {
    short = nums1
    long = nums2
  }

  for(var i=0;i<short.length;i++) {
    let add = true;
    for(var j=0;j<long.length;j++) {
      if(long[j] === short[i]) {
        if(add) {
          arr.push(long[j])
          long.splice(j,1)
          add = false
        }
      }
    }
  }

  return arr
};

// 哈希表解法
// 时间复杂度O(n)

// 先用Hashmap记录第一个数组中的元素【放在key】，和出现的次数【放在value】。

// 然后再遍历第二个数组，如果找到对应元素，则添加这个元素到返回数组里。

// 如果value值大于1，HashMap中的value值减 1，表示已经找到一个相同的了。

// 如果value值等于1，则删除该元素。


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let hash = new Map()
    let res = []
    for(let i = 0; i < nums1.length; i++) {
        if(hash.has(nums1[i])) {
            hash.set(nums1[i], hash.get(nums1[i]) + 1)
        } else {
           hash.set(nums1[i], 1) 
        }
    }
    
    for(let i = 0; i < nums2.length; i++) {
        let temp = nums2[i]
        let hashKey = hash.get(temp)
        if(hash.has(temp)) {
            res.push(temp)
            if(hashKey > 1) {
                hash.set(temp, hashKey - 1)
            } else {
                hash.delete(temp)
            }
        }
    }
    
    return res
};

console.log(intersect([4,9,5], [9,4,9,8,4]))