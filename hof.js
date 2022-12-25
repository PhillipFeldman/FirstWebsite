function f(x= (a)=>a){//default parameter x is identity arrow function
    return x(1) + x(3);
}


function y(a){
    return a*4;
}

console.log(f(y))//1*4 + 3*4=16
console.log(f())//1+3=4

console.log([1,1,2,3,5.5,-1,-2].filter(num => Number.isInteger(num)&&num>0).map(y))

function g(...args){
    let sum = 0;
    for(var i = 0; i<args.length;i++){
        sum+=args[i]
    }
    return sum;
}

console.log(g(7,1,2,3))
//spread operator
a1 = [1,2,3,[4,3]]
a2 = [...a1]//spread operator is a shallow copy
a2[0] = 5
console.log(a1)
console.log(a2)
a2[3][0] = 7
console.log(a1)
console.log(a2)
//export const abc = 1;//export doesn't work anymore?