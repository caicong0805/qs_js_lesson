// 如何手动实现 Array.prototype.map

var originArr = [1,2,3,4,5];
// var newArr = originArr.map(item => item*3);
// console.log(newArr);

// 手动实现 es6 -> es5 手写
// 闭包 高阶函数 作用域

// 顺序流程化具象解决问题
// var newArr = [];
// for(var i = 0,len = originArr.length;i < len; i++){
//     newArr.push(originArr[i]*3);
// }
// console.log(newArr);

// step2 封装函数
// 一个数组 每一项都3times 并且返回新的数组

// function multiplyByThree(arr) {
//     var newArr = [];
//     for(var i = 0,len = arr.length;i < len; i++){
//         newArr.push(originArr[i]*3);
//     }
//     return newArr;
// }
// console.log(multiplyByThree(originArr));

// step 3 将具象的东西拿掉

// function multiplyByThree(arr,time) {
//     var newArr = [];
//     for(var i = 0,len = arr.length;i < len; i++){
//         newArr.push(originArr[i]*time);
//     }
//     return newArr;
// }
// console.log(multiplyByThree(originArr,5));

// 数组 字符串数组，小写变大写？


// function makeUpperCase(item) {
//     return item.toUpperCase();
// }
// function makeLowerCase(item) {
//     return item.toLowerCase();
// }
// function timesFive(arr) {
//     return arr*5;
// }
// // 高阶函数 函数作为参数，返回值
// function map(arr,fn) {
//     // 函数内部 分几个函数 每个函数只做一件事
//     var newArr = [];
//     for(var i = 0;i< arr.length;i++) {
//         newArr.push(fn(arr[i]))
//     }
//     return newArr;
// }
// console.log(map(originArr,timesFive));
// console.log(map(['a','b','c'],makeUpperCase));

Array.prototype.map = function(fn) {
    var newArr = [];
    // this指向originArr
    console.log(this);
    for(var i = 0; i < this.length;i++) {
        newArr.push(fn(this[i],i,this))
    }
    return newArr;
}
var newArr = originArr.map(function(item,index,arr) {
    return item*index;
});
console.log(newArr);
