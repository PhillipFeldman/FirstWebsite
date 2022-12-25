function wordBlanks(myNoun,myAdjective,myVerb,myAdverb){
var result = "";
result += "The" +" "+ myAdjective +" " +myNoun +" " +myVerb +" "+ myAdverb + " to the store.";

return result;

}
console.log(wordBlanks("dog","small","ran","slowly"));