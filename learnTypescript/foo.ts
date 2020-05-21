// interface Point {
//   x: number;
//   y?: number | null;
// }
// class myPoint implements Point {
//   x:number;
//   z:number;
// }


// interface Crazy {
//   constructor(): {
//     hello: number;
//   };
// }

// class CrazyClass implements Crazy {
//   constructor() {
//     return { hello: 123 };
//   }
// }

// // Because
// const crazy = new CrazyClass(); // crazy would be { hello:123 }


// enum Tristate {
//   False,
//   True,
//   Unkown
// }

// console.log(Tristate[0]); // 'False'
// console.log(Tristate['False']); // 0
// console.log(Tristate[Tristate.False]); // 'False' because `Tristate.False == 0` 



// const foo = 123;
// const bar = foo.toString();
// declare var window: Window;

// interface Window {
//   helloWorld(str: string): void;
// }

// Add it at runtime
// window.helloWorld = () => console.log('hello world');

// Call it
// window.helloWorld();

// 滥用会导致错误
// window.helloWorld('gracius'); // Error: 提供的参数与目标不匹配

interface CallMeWithNewToGetString {
  new (): string;
}

// 使用
// declare const Foo: CallMeWithNewToGetString;
// const bar = new Foo(); // bar 被推断为 string 类型
// console.log(bar - 1)


interface Foo {
  bar: number;
  bas: string;
}

const foo: Foo ={
  // 编译器将会提供关于 Foo 属性的代码提示
  // 但是开发人员也很容易忘记添加所有的属性
  // 同样，如果 Foo 被重构，这段代码也可能被破坏（例如，一个新的属性被添加）。
  bar: 1,
  bas: '2'
};