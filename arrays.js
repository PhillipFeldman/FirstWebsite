var myArr = ["phil",123];
var arr = [myArr,"hello"];
console.log(arr[0]);
arr[0] = "world";
console.log(arr[0][0]);
arr.push([1234])
console.log(arr);
x = arr.pop();
console.log(arr);
console.log(x)
console.log(arr.shift(),arr)//shift is pop at the begginning
arr.unshift("hi")//unshift is push at the beginning.
console.log(arr)