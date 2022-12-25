function addToArr(arr,item,num){
    if(num == 0){
        return item;//recursion
    }
    console.log(arr)

    arr.push(item);
    addToArr(arr,item,num-1);
}
b = [1,2,3]
a = addToArr(b,7,3)
console.log(b)//arrays are pointers, just like in every other language
var i = 0
while(i < 3){//loops
    console.log(b.pop())
    i++;
}
console.log(b)
for(var x = -3;x<4;x++){
    b.push(x)
}
console.log(b)

