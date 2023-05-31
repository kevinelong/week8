function whatday(num) { 

    if(num < 1 || num > 7){
        return "Wrong, please enter a number between 1 and 7"
    }

    const DAY_LIST = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
      
    return DAY_LIST[num - 1];
  
    // const DAY_DICT=  {
    //   1: "Sunday",
    //   2: "Monday",
    //   3: "Tuesday",
    //   4: "Wednesday",
    //   5: "Thursday",
    //   6: "Friday",
    //   7: "Saturday",
    // };
    
    // return DAY_DICT[num];
    
    // put your code here
  
  //     if(num === 1) return "Sunday"
  //     if(num === 2) return "Monday"
  //     if(num === 3) return "Tuesday"
  //     if(num === 4) return "Wednesday"
  //     if(num === 5) return "Thursday"
  //     if(num === 6) return "Friday"
  //     if(num === 7) return "Saturday"
    
  //     return "Wrong, please enter a number between 1 and 7"
  
}

console.log(whatday(1) === 'Sunday')
console.log(whatday(2) === 'Monday')
console.log(whatday(3) === 'Tuesday')
console.log(whatday(8) === 'Wrong, please enter a number between 1 and 7')
console.log(whatday(30) === 'Wrong, please enter a number between 1 and 7')
// const Test = require('@codewars/test-compat');

// describe( "whatday", function(){
//   it( "should work for the examples" , function(){
//     Test.assertEquals(whatday(1),'Sunday')
//     Test.assertEquals(whatday(2), 'Monday')
//     Test.assertEquals(whatday(3),'Tuesday')
//        Test.assertEquals(whatday(8),  'Wrong, please enter a number between 1 and 7')
//     Test.assertEquals(whatday(20),  'Wrong, please enter a number between 1 and 7')

//       });
// });