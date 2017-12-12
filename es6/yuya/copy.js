// const arr = [1,2,3];
// // concat用于合并两个数组，不会更改现有数组，而是返回一个新数组
// const arr2 = arr.concat();
// console.log(arr);
// console.log(arr2);
// arr2[0] = 6;
// console.log(arr2,arr);
// arr2[1] = 4;
// console.log(arr);

// var arr = ['old',1,true,null,undefined];
// var new_arr = arr.concat();
// new_arr[0] = 'new';
// console.log(arr,new_arr);
// 基本类型

var arr = new Array(6);
console.log(arr.length);
arr[0] = "George";
arr[1] = "John";
arr[2] = "Thomas";
arr[3] = "James";
arr[4] = "Adrew";
arr[5] = "Martin";
const newArr = arr.slice();
newArr[0] = '分分';
// console.log(newArr);
// console.log(arr);
// console.log(arr.slice(2,4));
// console.log(arr.slice(-4,-1));
// js 数组 删除数组项目 并且加入
console.log(arr);
// 数组方法有两派， 改变原数组与否
arr.splice(2,0,'分分');
console.log(arr);
// 借用数组concat合并  slice
// 返回新数组的方式 来实现浅拷贝