var _ = require('lodash')


// Array

// var array = [1];
// var other = _.concat(array, 2, [3], [[4],[5],6],[{'a':1}],1,45);
// console.log(_.concat(_.uniq(other),'1'))
// console.log(_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }],'x'))









var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true },
  { 'user': 'edison', 'active': false },
];




// The `_.matchesProperty` iteratee shorthand.
var obj =_.dropWhile(users, ['active', false]);
console.log(obj)












// var arr = [1,1,1,12,3,4,5,6,undefined,'',0]
// // var newArr = _.uniq(arr)
// var newArr = _.uniq(arr)

// var arr = [
//   {id:0, name:'冠希', age:30},
//   {id:1, name:'刘醒', age:10},
//   {id:2, name:'梁非凡', age:20},
// ]
// var newArr = _.reject(arr, ['id',2])
// // console.log(newArr)


// var obj = {id:0, name:'冠希', age:30}

// var newObj = _.pick(obj,['name'])
// console.log(newObj)
// console.log(_.range(19))
// _.times(10,(i)=>console.log(i))
// console.log(_.uniqueId(10))
// console.log(_.uniqueId(10))
// console.log(_.uniqueId(10))

// console.log(_.truncat('adfadsf',1))

// var obj1 = {id:0, name:'冠希', age:30, grade: 100}
// var obj2 = {id:1, name:'刘醒', age:10}

// // var obj = _.defaults(obj2,obj1)
// console.log(_.findKey(obj1,(o)=>o.id<1))



// var users = {
//   'barney':  { 'age': 36, 'active': true },
//   'fred':    { 'age': 40, 'active': false },
//   'pebbles': { 'age': 1,  'active': true }
// };
 
// var obj = _.findKey(users, function(o) { return o.age < 40; });
// var obj = _.findKey(users, {'age':40});
// console.log(obj)


// var object = {
//   'a': [{ 'b': 2 }, { 'd': 4 }]
// };
// var other = {
//   'a': [{'b':4, 'c': 3 }, { 'e': 5 }]
// };
 
// var  a =_.merge(object,other);
// console.log(a)

// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
