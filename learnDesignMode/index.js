function a(a,b) {
  console.log(a,b);
  [].shift.call(arguments)
  console.log(arguments)
  console.log(a,b)
}
a(1,2)