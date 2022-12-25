for(var x = 0; x < 10; x++){
    switch(x){
        case 0:
            console.log(0)
            break;
        case 1:
            console.log(x)
        case 2:
            console.log("no break statement = runnaway train!")
        case 3:
            console.log("no break statement = runnaway train!")
        case 4:
            console.log("no break statement = runnaway train!")
        case 5:
            console.log("no break statement = runnaway train!")
        break;
        default:
            console.log("x is bigger than 10")

    }
}