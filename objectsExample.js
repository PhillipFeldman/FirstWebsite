var myDog = {
"name" : "Fido",
"legs" : 4,
"toys" : ["stick","chew toy"," bone"],
"alive " : true
}

console.log("dog has "+ myDog.legs + " legs")
console.log(myDog["alive "])
myDog.toys.push("shoe")
console.log(myDog.toys)
myDog.bark = "arf!"
myDog["growl"] = "grr"
console.log(myDog.bark)
console.log(myDog.growl)
console.log(myDog.hasOwnProperty("growl"))
delete myDog.growl
console.log(myDog.hasOwnProperty("growl"))
var kennel = {

    "dogs":[myDog],
    "food":["kibble","steak"]
}
console.log(kennel.dogs)