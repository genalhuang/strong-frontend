// interface Point {
//   x: number;
//   y?: number | null;
// }
// class myPoint implements Point {
//   x:number;
//   z:number;
// }
var foo = {
    // 编译器将会提供关于 Foo 属性的代码提示
    // 但是开发人员也很容易忘记添加所有的属性
    // 同样，如果 Foo 被重构，这段代码也可能被破坏（例如，一个新的属性被添加）。
    bar: 1,
    bas: '2'
};
