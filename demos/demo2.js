/*
In a factory a printer prints labels for boxes. 
For one kind of boxes the printer has to use colors which, 
for the sake of simplicity, 
are named with letters from a to m.

The colors used by the printer are recorded in a control string. 
For example a "good" control string would be aaabbbbhaijjjm meaning that 
the printer used three times color a, 
four times color b, 
one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced 
e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.
Examples:

s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"

const Test = require('@codewars/test-compat');

describe("printerError",function() {
it("Basic tests",function() {   
    var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
    Test.assertEquals(printerError(s), "3/56")
})})
*/
function isOutOfRange(c) {
    const VALID_RANGE = "abcdefghijklm";
    return !VALID_RANGE.includes(c);
}
function printerError(s) {
    let outOfRange = 0;
    // your code
    //convert string to list of letters?
    //loop through list
    const size = s.length;
    for (let i = 0; i < size; i++) {
        let c = s[i]; //s.charAt(i)
        //see if letter is in range (define the valid range)
        if (isOutOfRange(c)) {
            outOfRange++;
        }
        //outOfRange += isOutOfRange(c) ? 1 : 0; //shorter but less clear
    }
    return outOfRange + "/" + size;
}
// or unclear CODE GOLF - ONE LINER
printerError = s => [...s].filter(c => c > 'm').length + '/' + s.length;

var s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
const result = printerError(s);
console.log(result === "3/56" ? "PASS" : "FAIL: " + result);