//Even or Odd

function sum(array){
    //https://www.freecodecamp.org/news/how-to-add-numbers-in-javascript-arrays/
    return array.reduce((accumulator, currentValue) => accumulator + currentValue ,0);
}

function oddOrEven(array) {
    return sum(array) % 2 === 0 ? "even" : "odd"
}