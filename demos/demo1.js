//TDD Test first Devevlopment

/*
Create a function that takes a list of objects,
 and a display property,
  and a value propery,
   and returns a select with options. 
*/
//WHat is the simplest thing that might work?
function getSelectHTMLFromObjectList(list=[], display="name", value="id" ){
    //TODO: MAKE IT WORK
    let output = "<select>"
    for(let i = 0; i < list.length; i++){
        let item = list[i];
        let val = item[value]
        let disp = item[display];
        output += `<option value="${val}">${disp}</option>`
    }
    return output + "</select>";
}
//Can we refactor to be faster and shorter and still be clear?
function getSelectHTMLFromObjectList2(list=[], display="name", value="id" ){
    return `<select>` + list.map(o=>`<option value="${o[value]}">${o[display]}</option>`).join("") + `</select>`;
}
//How could we write a third version that used no concatenation (e.g. used Array.push() instead)
//TESTS
inputData = [
    {id: 1, name: "One"},
    {id: 2, name: "Two"}
];

expectedOutput = `<select><option value="1">One</option><option value="2">Two</option></select>`;

// let start = (new Date()).getTime()
let result1 = getSelectHTMLFromObjectList(inputData, "name", "id")
console.log(result1 === expectedOutput ? "PASS" : "FAIL" + result1)

// let stop = (new Date()).getTime()
// console.log(stop, start, stop - start, "ms")
