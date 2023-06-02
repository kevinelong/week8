let original = [
    {id:123, name: "Kevin"},
    {id:234, name: "Nina"},
]

// desired = {
//     123: { id: 123, name: "Kevin"},
//     234: { id: 234, name: "Nina"},
// }
// 
// write a function that converts the original data into the desired FormData.apply
function convertListToDict(list, key){
    let results = {};
    for(let i = 0; i < list.length; i++){
        item = list[i];
        //remove old id key?
        results[item[key]] = item;
    }
    return results
}

let output = convertListToDict(original, "id")
console.log(output[123].name)
console.log(output[234].name)

let output2 = convertListToDict(original, "name")
console.log(output2["Kevin"].id)
console.log(output2["Nina"].id)
