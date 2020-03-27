"use strict";
// let someValue: string = 'this is String ';
// let readStrLength = (<number>someValue.length)
// let readStrLength2: string = someValue;
// let readStrLength3: any = (someValue as string);
// console.log(readStrLength, 'readStrLength')
// console.log(readStrLength2, 'readStrLength2')
// console.log(readStrLength3)
var Person = /** @class */ (function () {
    function Person(config) {
        this.name = config.name;
        this.sex = config.sex;
        this.age = config.age;
    }
    return Person;
}());
var person = new Person({
    name: 'cui',
    age: 123,
    sex: true
});
console.log(person, 'person');
