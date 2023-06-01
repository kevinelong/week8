/*
Write functions to output each of these to N rows.
1. clue - only two simple for loops required?
#
##
###
####
2. clue - use minus?
   #
  ##
 ###
####
3. clue - also use division or multiplication or both?
   #
  ###
 #####
#######
*/

// TODO: Your code here


/* SOLUTION SPOILERS BELOW



function repeat(n,s){
    let output = ""
    for(let i =0; i < n; i++){
        output += s;
    }
    return output;
}

function one(n){
    let output = "";
    for(let r = 0; r < n; r++){
        output += repeat(r+1, "#") + "\n";
    }
    return output;
}
console.log(one(4))

function two(n){
    let output = "";
    for(let r = 0; r < n; r++){
        output += repeat(n - r - 1, " ") + repeat(r+1, "#") + "\n";
    }
    return output;
}
console.log(two(4))

function three(n){
    let output = "";
    for(let r = 0; r < n; r++){
        output += repeat(n - r - 1, " ") + repeat(r * 2 + 1, "#") + "\n";
    }
    return output;
}
console.log(three(4))
*/