console.log("thisString"=="thisString")
console.log("because of type conversion:");
console.log("\"1\" == 1 is " + ("1"==1))//
//need the parens around the boolean or the string wont be printed
console.log()
console.log("\"1\" === 1 is "+("1"===1))
console.log("\"1\" != 1 is " + ("1"!=1))
console.log()
console.log("\"1\" !== 1 is "+("1"!==1))
if("words"){
    console.log("strings are truthy ")
}
if(!null){
console.log("null is falsey")
}
if(!undefined){
    console.log("undefined is falsey")
    }

    if(!0){
        console.log("0 is falsey")
        }
if(1){
    console.log("1 is truthy")
}
if([]){
    console.log("[] is truthy")
}
if(-1){
    console.log("-1 is truthy")
}
if(!""){
    console.log("\"\" is falsey")
}
console.log("more type conversion:")
console.log('"1" < 2 is '+("1"< 2))
if(true && false){
    
}
else if(true && true){
    console.log("&& for and")
}
if(true || false){
    console.log("|| for or ")
}

