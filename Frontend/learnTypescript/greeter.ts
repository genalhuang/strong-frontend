// function greeter(person: string) {
//   return 'Hello, ' + person;
// }
// let user = [0,1,2]
// document.body.innerHTML = greeter(user)

// interface Person {
//   firstName: string;
//   lastName: string;
// }
// function greeter(person: Person) {
//   return 'Hello, ' + person.firstName + ' ' + person.lastName;
// }
// let user = {firstName:'Jane', lastName:'User',age:'19'};

// document.body.innerHTML =  greeter(user)

// class Student {
//   fullName: string;
//   constructor(public firstName, public middleInitial, public lastName) {
//     this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
//   }
// }
// interface Person {
//   firstName: string;
//   lastName: string;
// }
// function greeter(person: Person) {
//   return 'Hello' + person.firstName + '' + person.lastName;
// }
// let user = new Student('Jane', 'M.','User');
// document.body.innerHTML =greeter(user);


// let list : number[] = [1,2,3]
// let lists : Array<number>= [1,2,3]
// let x:[string,number];
// x=['hello',10];
// x=['xfasdfasd',10]
// x[0].substr(1);
// console.log(x[0])

// enum Color {Red=1, Green=4, Blue=6}
// let c: Color = Color.Green

// console.log(Color[c])

// let someValue :any = 'this is a string'
// // let strLength : number = (<string>someValue).length;
// let strLength : number = (someValue as string).length
// console.log(strLength)

// a='ccc';
// let a: string
// let a: number[][]
// a=[[1],[1,12],[34]]

// interface LabelledValue {
//   label: string;
// }

// function printLabel(labelledObj: LabelledValue) {
//   console.log(labelledObj.label);
// }

// let myObj = {size: 10, label: "Size 13331 Object"};
// printLabel(myObj);


// interface SquareConfig {
//   color?: string;
//   width?: number;
//   [propName:string]:any
// }

// function createSquare(config: SquareConfig): {color: string; area: number} {
//   let newSquare = {color: "white", area: 100};
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let mySquare = createSquare({color: "black"});
// console.log(mySquare)

// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;
// // ro[0] = 12; // error!
// // ro.push(5); // error!
// // ro.length = 100; // error!
// // a = ro; // error!

// let b = ro as number[];
// b[0]=111
// console.log(b)

// interface SquareConfig {
//   color?: string;
//   width?: number;
//   [propName:string]:any
// }

// function createSquare(config: SquareConfig): SquareConfig {
//   let newSquare = {color: "white", area: 100};
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return config;
// }

// let mySquare = createSquare({color: "black",aa:'aaa',width:1324,bbb:'bbb'});
// console.log(mySquare)



// interface StringArray {
//   [index: string]: string;
// }

// let myArray: StringArray;
// myArray = {"Bob":'a', "Fred":'a'};

// let myStr: string = myArray['Bob'];
// console.log(myStr)



// interface Shape {
//   color: string;
// }

// interface Square extends Shape {
//   sideLength: number;
// }

// let square:Square;
// square.color = "blue";
// square.sideLength = 10;


// interface Shape {
//   color: string;
// }

// interface Square extends Shape {
//   sideLength: number;
// }

// let square = <Square>{};
// square.color = "blue";
// square.sideLength = 10;



// interface Shape {
//   color: string;
// }

// interface Square extends Shape {
//   sideLength: number;
// }

// let square= {} as Square;
// // square.color = "blue";
// square.sideLength = 10;
// console.log(square)

// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }
// let mySearch: SearchFunc;
// mySearch = function(source: string, subString: string) {
//   let result = source.search(subString);
//   return result > -1;
// }

// <SearchFunc>function(src: string, sub: string): boolean {
//   let result = src.search(sub);
//   return result > -1;
// }



// interface a {
//   b:string
//   d():number
// }

// let e:a;
// e.b='bbb'
// e.d = function () {
//   return 1
// }
// console.log(e)



// class Control {
//   private state: any;
// }

// interface SelectableControl extends Control {
//   select(): void;
// }

// class Button extends Control implements SelectableControl {
//   select() { }
// }

// class TextBox extends Control {
//   select() { }
// }
// let button :Button
// console.log(button)



// class Control {
//   public state: any;
// }

// interface SelectableControl extends Control {
//   select(): void;
//   str:string
// }

// class Button extends Control implements SelectableControl {
//   select(){}
//   str='string'
//   constructor(e) {
//     super()
//     this.state = e;
//     console.log(e)
//     console.log(this.str)
//   }
// }
// let button:any = new Button('ccc')








// class Control {
//   public state: any;
// }

// interface SelectableControl extends Control {
//   select(): void;
// }

// class Button extends Control implements SelectableControl {
//   select() { }
// }

// class TextBox extends Control {
//   select() { }
// }

// // 错误：“Image”类型缺少“state”属性。
// class Imagde  implements SelectableControl {

//   state:'ccc'
//   select() { }
// }
// console.log(TextBox)

// class Location {

// }


// class Greeter {
//   greeting: string;
//   constructor(message: string) {
//       this.greeting = message;
//   }
//   greet() {
//       return "Hello, " + this.greeting;
//   }
// }

// let greeter = new Greeter("world");
// let c = greeter.greet()
// console.log(c)


// class Animal {
//   move(distanceInMeters: number = 0) {
//       console.log(`Animal moved ${distanceInMeters}m.`);
//   }
// }

// class Dog extends Animal {
//   bark() {
//       console.log('Woof! Woof!');
//   }
// }

// const dog = new Dog();
// dog.bark();
// dog.move(10);
// dog.bark();


// class a{
//   b(){}
// }

// class Foo {
//   constructor() {
//     let a =0;
//   }
// }

// new Foo() instanceof Foo

// class a { 
//   b = 1 
// } 
// class c extends a { } 

// var d = new c()

// 枚举
// enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
//
// console.log(Days["Sun"] === 0); // true
// console.log(Days["Mon"] === 1); // true
// console.log(Days["Tue"] === 2); // true
// console.log(Days["Sat"] === 6); // true
//
// console.log(Days[0] === "Sun"); // true
// console.log(Days[1] === "Mon"); // true
// console.log(Days[2] === "Tue"); // true
// console.log(Days[6] === "Sat"); // true



// interface Lengthwise {
//   length: number;
// }
//
// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//   console.log(arg.length)
//   return arg;
// }
// loggingIdentity(`17`);
//
//
// interface CreateArrayFunc {
//   <T>(length: number, value: T): Array<T>;
// }
// let createArray: CreateArrayFunc;
// createArray = function<T>(length: number, value: T): Array<T> {
//   // xxx
// }
//
// interface CreateArrayFunc<T> {
//   (length: number, value: T): Array<T>;
// }
//
//
// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x:T, y:T) => T;
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x,y) {return x+y};
//
//
// function createArray<T = string>(length: number, value: T):Array<T> {
//   let retult: T[]= [];
//
// }




// class Person {
//   protected name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }
//
// class Employee {
//   protected department: string;
//   constructor(name: string, department: string) {
//     this.department = department
//   }
//   getElevatorPitch() {
//     return 'Hello'
//   }
// }
// class Boy extends Employee {
//   constructor() {
//     super('aa','cc');
//   }
//   a(){
//     console.log(this.department)
//   }
// }
// var b = new Employee('aa','asdf');
// b.department
// // console.log(b.department)
// class c extends Employee {
//   constructor(a,b) {
//     super(b,a);
//   }
// }
// var d = new c('aaa','bbb')
// console.log(d.department)

// private: 只能自己类内部用用
// protected： 只能自己类和子类用
// static： 静态属性，属于类，当变量用， 不属于实例 static 静态属性名 = xxx


// class Greeter {
//   static standardGreeting = 'Hello, there';
//   greeting: string;
//   constructor(message?: string) {
//     this.greeting = message
//   }
//   greet() {
//     if(this.greeting) {
//       return 'Hello,' + this.greeting
//     } else {
//       return Greeter.standardGreeting
//     }
//   }
// }
//
// let greeter: Greeter;
// greeter = new Greeter('ccc');
// console.log(greeter.greet());
//
// let greeterMaker: typeof Greeter = Greeter;
// greeterMaker.standardGreeting = 'Edison Chen';
// let greeter2 = new Greeter();
// console.log(greeter2.greet());




// function buildName(firstName: string, ...restName: string[]):string {
//   return firstName + ' ' + restName
// }
//
// let buildNameFn: (fname: string, ...rest: string[]) => string = buildName;
// interface Card {
//   suit:string
//   card: number
// }
// interface Deck {
//   suits: string[]
//   cards: number[]
//   createCardPicker(this: Deck): ()=>Card
// }
// let deck: Deck = {
//   suits: ['hearts', 'spades', 'clubs', 'diamonds'],
//   cards: Array(52),
//   createCardPicker: function(this: Deck) {
//     return () => {
//       let pickedCard = Math.floor(Math.random() * 52)
//       let pickedSuit = Math.floor(pickedCard/ 13)
//       return {
//         suit: this.suits[pickedSuit],
//         card: pickedCard % 13
//       }
//     }
//   }
// }
//
// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker()
// console.log(pickedCard)


// interface UIElement {
//   addClickListener(onClick: (this: void, e: Event) => void): void
// }
// class Handler {
//   type: string
//   onClickBad = (e: Event) => {
//     this.type = e.type
//   }
// }
//
// let h = new Handler()
// h.type= 'edison'
// let uiElement: UIElement = {
//   addClickListener(a:any) {
//     a({type: 'ccc'})
//   }
// }
//
// uiElement.addClickListener(h.onClickBad)

// 泛型
// function identity<T>(arg: T): T {
//   return arg
// }

// let output = identity<string>('myString')
// let output = identity('string')

// function loginIdentity<T>(arg: T[]): T {
//   console.log(arg.length)
//   return arg[1]
// }
//
// let myIdentity:{<T>(arg: T): T} = loginIdentity
//
// interface GenericIdentityFn<T> {
//   (arg: T[]): T
// }
// let myIdentity: GenericIdentityFn<string> = loginIdentity


// class GenericNumber<T> {
//   zeroValue: T
//   add: (x: T, y: T) => T
// }
//
// let myGenericNumber = new GenericNumber<number>()
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x,y) {
//   return x+ y
// }
// let stringNumberic = new GenericNumber<string>()
// stringNumberic.zeroValue = 'a';
// stringNumberic.add = function (x,y) {
//   return x+ y
// }
// console.log(stringNumberic.add(stringNumberic.zeroValue,'test'))


// 泛型约束
// interface Lengthwise {
//   length: number
//   width: number
// }
// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//   console.log(arg.length, arg.width)
//   return arg
// }
// loggingIdentity({length: 1,width: 2})

// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key]
// }
// let x = {a:1, b:'2'}
// console.log(getProperty(x, 'a'));
// console.log(getProperty(x, 'm'));
//


// function create<T>(c: {new(): T}): T {
//   return new c()
// }

// class BeeKeeper {
//   hasMask: boolean
// }
// class LionKeeper {
//   manetag: string
// }
//
// class Animal {
//   numLengs: number
// }
// class Bee extends Animal {
//   keeper: BeeKeeper
// }
//
// class Lion extends Animal {
//   keeper: LionKeeper
// }
//
// function createInstance<T extends Animal>(c: new()=>T): T {
//   return new c()
// }
// createInstance(Lion).keeper.manetag;
// createInstance(Bee).keeper.hasMask;



// function extend<T, U>(first: T, second: U): T & U {
//   let result = {} as T & U
//   for (let i in first) {
//     result[i] = first[i] as any
//   }
//   for (let id in second) {
//     if(!result.hasOwnProperty(id)) {
//       result[id] = second[id] as any
//     }
//   }
//   return result
// }
//
// class Person {
//   constructor(public name:string) {
//
//   }
// }
// interface Loggable {
//   log(): void
// }
// class ConsoleLogger implements Loggable {
//   log() {
//     console.log('edison')
//   }
// }
//
// var jim = extend(new Person('jim'), new ConsoleLogger())
// console.log(jim.name)
// jim.log()


// interface Bird {
//   fly()
//   layEggs()
// }
// interface Fish {
//   swim()
//   layEggs()
// }
// function a():Fish | Bird {
//
// }
// let pet = a()
// pet.fly()
// pet.swim()
// if((pet as Fish).swim) {
//   (pet as Fish).swim()
// }
// if((pet as Bird).fly) {
//   (pet as Bird).fly()
// }
// pet.layEggs()
//
// function isFish(pet: Fish | Bird): pet is Fish {
//   return (pet as Fish).swim !== undefined
// }
// if(isFish(pet)) {
//   pet.swim()
// } else {
//   pet.fly()
// }


// function isNumber(x: any): x is number {
//   return typeof x === 'number'
// }
// function isString(x: any): x is string {
//   return typeof x === 'string'
// }
//
// function padLeft(value: string, padding: string|number) {
//   if(isNumber(padding)) {
//     return Array(padding +1).join(padding) + value
//   }
//   if(isString(padding)) {
//     return padding + value
//   }
//   throw new Error('you are wrong')
// }
//
// console.log(padLeft('chen', 'edison'));
// console.log(padLeft('chen', 11));





// class Bird {
//   fly() {
//     console.log('bird fly')
//   }
//   layEggs() {
//     console.log('bird eggs')
//   }
// }
// class Fish {
//   swim() {
//   console.log('fish swim')
// }
//   layEggs() {
//   console.log('fish eggs')
// }
// }
//
// function getRandomPet(): Fish | Bird {
//   return Math.random() > 0.5 ? new Bird() : new Fish()
// }
// let pet = getRandomPet()
//
// if(pet instanceof  Bird) {
//   pet.fly()
// } else if (pet instanceof Fish) {
//   pet.swim()
// }

// null 和 undefined 可以赋值给任何类型 是所有类型的有效值
// let a: null
// a=undefined


// class C{
//   a: number
//   b?: number
// }
// let c = new C()
// c.a = 12
// // c.a = undefined
// c.b = 13
// c.b = undefined
// // c.b = null



//去null
// function f(sn: string | null) {
//   if( sn === null) {
//     return 'default'
//   }else {
//     return sn
//   }
// }

// function fn(sn: string | null): string {
//   return sn! || 'default'
// }


// function broken (name: string | null) :string {
//   function postfix(epithet: string) {
//     return name!.charAt(0) + '. the'  + epithet
//   }
//   name = name || 'Bob';
//   return postfix(name)
// }


// type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'
// class UIElement {
//   animate(dx: number, dy: number, easing: Easing) {
//     if(easing === 'ease-in') {
//       console.log(easing)
//     }
//   }
// }

// let button = new UIElement()

// button.animate(0,0,'ease-in')
// button.animate(0,0,null)




class a {
  public static b():a {
    if (!a.instance) {
      a.instance = new a();
    }
    return a.instance;
  } 
  private static instance: a;

  public sayHello():string {
    return 'hello Wrold'
  }
}

const aInstance = a.b()
console.log(aInstance.sayHello())













