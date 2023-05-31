/*
Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

Valid examples, should return true:

isDigit("3")
isDigit("  3  ")
isDigit("-3.23")

should return false:

isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")

*/
function isDigit(s) {
    //your code

    //ignore spaces outside
    s= s.trim()

    if(s.length === 0 ){
        return false;
    }

    // //reject spaces inside
    // if(s.includes(" ")){
    //     return false;
    // }

    //reject minus inside
    if(s.indexOf("-", 1) != - 1){
        return false;
    }

    return !isNaN(s);
  }

console.log(isDigit("s2324") === false ? "PASS" : "FAIL: " + s);
console.log(isDigit("3-4") === false ? "PASS" : "FAIL: " + s);
console.log(isDigit("  3   5") === false ? "PASS" : "FAIL: " + s);
console.log(isDigit("3 5") === false ? "PASS" : "FAIL: " + s);
console.log(isDigit("zero") === false ? "PASS" : "FAIL: " + s);

console.log(isDigit("-234.4") === true ? "PASS" : "FAIL: " + s);
console.log(isDigit("3") === true ? "PASS" : "FAIL: " + s);
console.log(isDigit("  3  ") === true ? "PASS" : "FAIL: " + s);
console.log(isDigit("-3.23") === true ? "PASS" : "FAIL: " + s);
