function SwitchHelper(x){
    if (0<x && x< 6){
        return true
    }
}//intentionally didn't return false--returns undefined

for(var i = -1; i < 7; i++){
    z = (SwitchHelper(i)==true)
    switch(z){//compare to switchfuncs
        case true:
            console.log("i is from 1 to 5, inclusive")
            break;
        case false:
            console.log("i is not from 1 to 5")
            break;
        case null:
            console.log("false wasn't it")
            break;
        case undefined:
            console.log("use undefined")
    }
}