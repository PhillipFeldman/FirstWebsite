var stuff = {a:1,b:2}
const{a:x,b:y} = stuff;
console.log(x)

const [w,g,,f] = [5,6,7,8]
console.log(f)

let t = 5,s=6;
(()=>{
"use strict";
[t,s] = [s,t]
})();
console.log(t)

let n = 9, m = 0;
[n,m] = [m,n];
console.log(n)