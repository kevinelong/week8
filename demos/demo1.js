
/*
Create a function that takes a list of objects,
 and a display property,
  and a value propery,
   and returns a select with options. 
*/

function getSelectHTMLFromObjectList(list=[], display="", value="" ){
    //TODO: MAKE IT WORK
    
    return "";
}

//TESTS
inputData = [
    {id: 1, name: "One"},
    {id: 2, name: "Two"}
];
expectedOutput = `<select><option value="1">One</option><option value="2">Two</option></select>`;

result1 = getSelectHTMLFromObjectList(inputData, "name", "id")
console.log(result1 === expectedOutput ? "PASS" : "FAIL")
