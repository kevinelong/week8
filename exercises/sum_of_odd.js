/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

*/
function total(list) {
    let subtotal = 0;
    list.forEach(v => subtotal += v);
    return subtotal;
}

function rowSumOddNumbers(n) {
    // TODO
    let rows = [];
    let e = 1;
    for (let r = 0; r < n; r++) {
        let row = [];
        while (row.length < r + 1) {
            row.push(e)
            e += 2
        }
        rows.push(row)
        console.log(row.join())
    }

    console.log(rows)
    return total(rows[n - 1])
}

console.log(rowSumOddNumbers(1))
console.log(rowSumOddNumbers(3))
console.log(rowSumOddNumbers(42))
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(rowSumOddNumbers(1), 1);
//     assert.strictEqual(rowSumOddNumbers(42), 74088);
//   });
// });
