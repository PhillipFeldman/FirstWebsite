var myGlobal = 10;
var b = 1;//global b
function myfunc(a){
    console.log(a);
    myOtherGlobal = 5

}
function scope_trick(){
    var notGlobal = 55;
    oopsGlobal = "I escaped scope!"//or not- 4 year old js tutorial
}
myfunc("hello111")
function myfunc(a,b){//local b overrides global scope
    console.log(a);
    console.log(b);
    console.log(myGlobal)
    if (typeof myGlobal != "undefined"){
        console.log("myGlobal is declared and defined")
    }
    if (typeof myOtherGlobal != "undefined"){
        console.log("yes")
    } else{
        console.log("no")//other global not declared or not defined
    }
    /*
    Below was supposed to be an interesting scope
    example, but I'm watching a 4 year old js
    tutorial on youtube from freecodecamp
    */
    if (typeof notGlobal != "undefined"){
        console.log("yes")
    } else{
        console.log("not global")//other global not declared or not defined
    }
    if (typeof oopsGlobal != "undefined"){
        console.log("You forgot the var keyword so it escaped scope")
    } 
    //console.log(notGlobal)
    /*
    Clearly, the four year old javascript tutorial
    is becoming obolete
    */
}
myfunc("world","hello")
myfunc("?")
/*
The runtime value of a function seems to be 
the most recent definition... whatever that means

a function called with missing 
arguments--param value defaults to undefined

Is there a way to skip a parameter?
such as:
myfunc(,"b variable")
^syntax error
*/