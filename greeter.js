"use strict";
// let someValue: string = 'this is String ';
// let readStrLength = (<number>someValue.length)
// let readStrLength2: string = someValue;
// let readStrLength3: any = (someValue as string);
// console.log(readStrLength, 'readStrLength')
// console.log(readStrLength2, 'readStrLength2')
// console.log(readStrLength3)
// 接口 interface  拦截器interceptor
function printLabel(data) {
    console.log(data.label);
}
var data = {
    label: '1',
    0: "1"
};
// data = { label: '1' };
// data.s = 1
printLabel(data);
