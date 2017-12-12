// var arr = [2,4,6,8];
// const newArr = arr.filter(item => item>5);
// console.log(newArr);
// function filterLessThanFive() {

// }
// Array.prototype.filter = function(fn) {
//     var newArr = [];
//     for(var i = 0;i <this.length; i++){
//         if(this.test) {
//             newArr.push(fn(this[i],test,arr))
//         }
//     }
//     return newArr;
// }
// var arr = [1,2,3,4,5,6,7];
// var newArr = arr.filter(function(item,test,arr){
//     test = item > 5;
// })

var arr = [2,4,6,8,10,11];
// const newArr = arr.filter(item => {
//     return item > 5;
// })
// console.log(newArr);
function filterLessThanFive(item) {
    return item > 5;
}
function filterOdd (item) {
    return (item % 2) != 0
}
function filter(arr, testFunction) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (testFunction(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
console.log(filter(arr, filterOdd));
