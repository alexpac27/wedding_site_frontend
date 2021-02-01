
let originalArray = [1,2,[3,4]]             // <-- This array is one level at its deepest

let flatArray = originalArray.flat()

console.log(flatArray)                      // [1,2,3,4]


let twoLevels = [1,[2],[[3]]]               // <-- This array is two levels at its deepest

let flatTwoLevels = twoLevels.flat()

console.log(flatTwoLevels)                  // [1,2,[3]]


