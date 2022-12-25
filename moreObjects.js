/*import{f} from "./hof.js"
console.log(f)
need to figure out import/export
*/
var Dog = function(name,age,legs){
    this.name = name;
    this.age = age;
    this.legs = legs;
}
var d1 = new Dog("fido",1,4)
var d2 = new Dog("clifford",2,5)
console.log(d1.name)
console.log(d2.name)

class Cat{
    constructor(name,age){
        this._name = name;
        this.age = age;
    }
    get name(){
        return this._name;
    }
}
c1 = new Cat("kitty",4)
console.log(c1.name)
console.log(c1._name)// _ (underscore) makes variables "private" --NOT
//console.log(f)