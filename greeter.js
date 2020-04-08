"use strict";
// // // // let someValue: string = 'this is String ';
// // // // let readStrLength = (<number>someValue.length)
// // // // let readStrLength2: string = someValue;
// // // // let readStrLength3: any = (someValue as string);
// // // // console.log(readStrLength, 'readStrLength')
// // // // console.log(readStrLength2, 'readStrLength2')
// // // // console.log(readStrLength3)
// // // // 接口 interface  拦截器interceptor
// // // // function  printLabel(data: { label: string }) {
// // // // 	console.log(data.label)
// // // // }
// // // // let data = {
// // // // 	label: '1',
// // // // 	0: "1"
// // // // };
// // // // // data = { label: '1' };
// // // // // data.s = 1
// // // // printLabel(data)
// // // // interface LabelledValue {
// // // // 	label: string,
// // // // 	0: number
// // // // }
// // // // function printLabel(data: LabelledValue) {
// // // // 	console.log(data, 'data')
// // // // }
// // // // printLabel({ 0: 1, label: 'x' })
// // // // interface SquareConfig {
// // // // 	color?: string,
// // // // 	width: number
// // // // }
// // // // function createSquareConfig(data: SquareConfig) {
// // // // 	let square = {
// // // // 		width: data.width * 4,
// // // // 		background: ''
// // // // 	}
// // // // 	if (data.color) {
// // // // 		square.background = data.color
// // // // 	}
// // // // 	return square
// // // // }
// // // // let config: SquareConfig = {
// // // // 	color: "pink",
// // // // 	width: 15,
// // // // }
// // // // console.log(
// // // // 	createSquareConfig(config)
// // // // )
// // // // interface Config {
// // // // 	color?: string,
// // // // 	readonly width: number
// // // // }
// // // // function createSquareFn(data: Config): { area: number, color: string, edit: boolean } {
// // // // 	let NewSquare = { edit: false, area: data.width * data.width, color: data.color || 'pink' }
// // // // 	return NewSquare
// // // // }
// // // // let squareObj: Config = {
// // // // 	width: 100
// // // // };
// // // // console.log(createSquareFn(squareObj))
// // // // let a: number[] = [];
// // // // // for (let i = 11; i > 0; i--) {
// // // // // 	a.push(i)
// // // // // 	let str: string = '* * * * * * * * * * *';
// // // // // 	str = str.slice(0, i)
// // // // // 	let flag: number = 10 - str.length
// // // // // 	let nbsp = '';
// // // // // 	for (let j = 11; j > i; j--) {
// // // // // 		nbsp += " "
// // // // // 		// j % 2 === 0 || j === 1 ? nbsp += " " : ''
// // // // // 	}
// // // // // 	let result = nbsp + str;
// // // // // 	console.log(result)
// // // // // }
// // // // // a.push(1, 111)
// // // // // let ro: ReadonlyArray<number> = a;
// // // // // // ro[0] = 0; error
// // // // // // ro.push(1); error
// // // // // // a.push(2) success
// // // // // // a = ro; error
// // // // // a.push(22)
// // // // // a = ro as number[]
// // // // // console.log(ro);
// // // // // console.log(a);
// // // // interface SquareConfig {
// // // // 	color?: string,
// // // // 	width?: number,
// // // // }
// // // // function createSquareConfig(config: SquareConfig): { area: number, color: string } {
// // // // 	let NewSquare = {
// // // // 		area: config.width ? config.width * config.width : 0,
// // // // 		color: config.color ? config.color : ''
// // // // 	};
// // // // 	return NewSquare
// // // // }
// // // // const config = {
// // // // 	color: 'pink',
// // // // 	name: 'cui',
// // // // 	// width: 15,
// // // // }
// // // // console.log(createSquareConfig(<SquareConfig>{
// // // // 	color: 'pink',
// // // // 	name: 'cui',
// // // // 	// width: 15,
// // // // }))
// // // // // console.log(document, 'document')4
// // // // interface SearchFunc {
// // // // 	(source: string, sunString: string): boolean
// // // // }
// // // // let mySearch: SearchFunc;
// // // // mySearch = function (source: string, subString: string): boolean {
// // // // 	let result = source.search(subString);
// // // // 	console.log(source, subString, result)
// // // // 	return result > 1
// // // // }
// // // // console.log(mySearch('00xxx', 'x'))
// // // // function 
// // // // interface StringArray {
// // // // 	[index: number]: object
// // // // }
// // // // let myArray: StringArray;
// // // // myArray = [[], {}];
// // // // let myStr: StringArray = myArray[0];
// // // // class Animal {
// // // // 	name: string;
// // // // 	constructor(name: string) {
// // // // 		this.name = name
// // // // 	}
// // // // }
// // // // class Dog extends Animal {
// // // // 	breed: string;
// // // // 	constructor(props: object) {
// // // // 		let { name: string, sex: string = '' } = props;
// // // // 		super(name)
// // // // 		this.breed = sex;
// // // // 	}
// // // // 	say() {
// // // // 		console.log(this.name + this.breed)
// // // // 	}
// // // // }
// // // // console.log(new Dog({ name: '奔奔', sex: 'boy' }))
// // // // interface NotOkay {
// // // // 	[x: number]: Animal;
// // // // 	[x: string]: Dog;
// // // // }
// // // // interface NumberDictionary{
// // // // 	[index:string] :number;
// // // // 	length:number;
// // // // }
// // // // class Greeter {
// // // // 	name: string;
// // // // 	constructor(name: string) {
// // // // 		this.name = name
// // // // 	}
// // // // 	say() {
// // // // 		console.log(this.name + '先生')
// // // // 	}
// // // // }
// // // // let greeter = new Greeter('崔');
// // // // greeter.say()
// // // // class Animal {
// // // // 	move(distanceInMeters: number = 0, animal: string) {
// // // // 		console.log('this is ' + animal + ' run ' + distanceInMeters + '!!')
// // // // 	}
// // // // }
// // // // class Dog extends Animal {
// // // // 	bark() {
// // // // 		console.log('woof , woof ')
// // // // 	}
// // // // }
// // // // let dog = new Dog()
// // // // dog.bark();
// // // // console.dir(dog.constructor);
// // // // dog.move(10, );
// // // // class Animal {
// // // // 	public name: string;
// // // // 	public constructor(theName: string) { this.name = theName };
// // // // 	public move(distanceInMeters: number) {
// // // // 		console.log(distanceInMeters)
// // // // 	}
// // // // }
// // // // let person = new Animal('cuiwant');
// // // // console.log(person.name)
// // // // class Animal {
// // // // 	private name: string;
// // // // 	constructor(name: string) {
// // // // 		this.name = name
// // // // 		console.log(name, 'xx')
// // // // 	}
// // // // 	say() {
// // // // 		// console.log(name)  ''
// // // // 		// console.log(this.name)
// // // // 		return this.name
// // // // 	}
// // // // }
// // // // let person = new Animal('cui');
// // // // console.log(person.say(), 'name')
// // // // console.log(person.name, 'person')
// // // // console.dir(Animal, 'ss')
// // // // class Animal {
// // // // 	protected name: string;
// // // // 	constructor(name: string) {
// // // // 		this.name = name
// // // // 	}
// // // // }
// // // // class Dog extends Animal {
// // // // 	constructor(name: string) {
// // // // 		super(name)
// // // // 	}
// // // // }
// // // // let animal = new Animal('cui');
// // // // let dog = new Dog('wangcai');
// // // // let betray = {};
// // // // 背叛 betray
// // // // betray.__proto__ = dog.__proto__;
// // // // console.log(betray)
// // // // animal = dog;
// // // // animal = {}; //error
// // // // interface personConfig {
// // // // 	readonly name?: string;
// // // // 	readonly sex?: boolean;
// // // // 	readonly age?: number;
// // // // }
// // // // class Person {
// // // // 	readonly config: any;
// // // // 	readonly name?: string;
// // // // 	readonly sex?: boolean;
// // // // 	readonly age?: number;
// // // // 	constructor(config: personConfig) {
// // // // 		this.name = config.name;
// // // // 		this.sex = config.sex;
// // // // 		this.age = config.age;
// // // // 	}
// // // // }
// // // // let person: Person = new Person({
// // // // 	name: 'cui',
// // // // 	age: 123,
// // // // 	sex: true
// // // // })
// // // // console.log(person, 'person')
// // // // class Employee {
// // // // 	fullName: string;
// // // // }
// // // // let employee: Employee = new Employee()
// // // // employee.fullName = 'cui';
// // // // if (employee.fullName) {
// // // // 	console.log(employee.fullName);
// // // // }
// // // let passcoede = "secrest passcode";
// // // class Employee {
// // // 	private _fullName: string;
// // // 	get fullName(): string {
// // // 		return this._fullName
// // // 	}
// // // 	set fullName(name: string) {
// // // 		if (passcoede && passcoede === 'secrest passcode') {
// // // 			this._fullName = name;
// // // 		} else {
// // // 			alert('passcode error')
// // // 		}
// // // 	}
// // // }
// // // let employee: Employee = new Employee();
// // // employee.fullName = ' cui yong hao ';
// // // if (employee.fullName) {
// // // 	alert(employee.fullName)
// // // }
// // // let anyThing: any = '1';
// // // anyThing();
// // // console.log(anyThing)
// // // let str = 1;
// // // str = '1';
// // // let str: string | number | boolean | undefined | null
// // // interface Person {
// // // 	name: string,
// // // 	age: number,
// // // 	readonly id: string | number
// // // }
// // // let user: Person = {
// // // 	name: 'ss',
// // // 	age: Infinity,
// // // 	id: 1
// // // }
// // // user.id = user.name;
// // // str = {}
// // // let arr: number[] = [1, 2, 3, 4, 5, 6];
// // // arr.push('1') //error
// // // function createArray(length: number, value: any): Array<any> {
// // // 	let result = [];
// // // 	for (let i = 0; i < length; i++) {
// // // 		result[i] = value
// // // 	}
// // // 	return result
// // // }
// // // console.log(createArray(2, false))
// // // function swap<U, T, F>(tuple: [T, U, T, F]): [U, T] {
// // // 	console.log()
// // // 	return [tuple[1], tuple[0]]
// // // }
// // // swap([1, 8, 1, 2])
// // interface Person {
// // 	name: string,
// // 	age?: number,
// // 	readonly id: any
// // }
// // // let user: Person = {
// // // 	name: 'cuiyonghao',
// // // 	age: 25,
// // // 	id: 199602040615
// // // }
// // let value = '1';
// // // delete user.age
// // // delete user.name 编译不出错
// // // function test(data: any): Array<number> {
// // // 	let arr: number[] = [];
// // // 	// arr[0] = 2;
// // // 	arr.push(data)
// // // 	arr.push(data)
// // // 	return arr
// // // }
// // // console.log(test(value))
// // function sum() {
// // 	// arguments.index = 1;
// // 	let args: IArguments = arguments
// // }
// // let arr: string[] = ['', '']
// // console.log(arr, 'arr')
// // arr.push(1);  //error
// // let arr: object[] = [];
// // arr.push({}, [], function () { });
// // arr[5] = 1;
// // interface Point {
// // 	readonly console: string;
// // 	log?: any;
// // }
// // let fn = <Point>(data: Point): Point => {
// // 	return data
// // }
// // let param: Point = {
// // 	console: 'cui',
// // 	log: 2
// // }
// // console.log(fn(param))
// // let arr = ['f', 'i', 'g', 'h', 't', 'i', 'n', 'g']
// // for (let ar in arr) {
// // 	console.log(ar)
// // }
// var fn = function (value: boolean): boolean {
// 	// console.log(, 'this')
// 	console.log(globalThis);
// 	// this
// 	// console.log(, 'this');
// 	return value
// }
// fn(true)
// function identity<T>(arg: T): T {
// 	return arg
// }
// let output = identity<number>(1)
// function identity<T>(arg: T[]): T[] {
// 	console.log(arg.length)
// 	return arg
// }
// function identity<T>(arg: Array<T>): Array<T> {
// 	return arg
// }
// function identity<t>(arg: t): t {
// 	return arg
// }
// let _identity: <T>(arg: T) => T = identity;
// 拦截器interceptor
// interface Identity<T> {
// 	(arg: T): string
// }
// function identity<T>(arg: T): string {
// 	return '1'
// }
// let _identity: Identity<number> = identity;
var GenericNumber = /** @class */ (function () {
    function GenericNumber(arg) {
        this.name = arg;
    }
    return GenericNumber;
}());
