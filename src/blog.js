// One level deep
let originalArray = [1,2,[3,4]]           

let flatArray = originalArray.flat()

console.log(flatArray)                      // [1,2,3,4]

// Two levels deep
let twoLevels = [1,[2],[[3]]]            

let flatTwoLevels = twoLevels.flat()

console.log(flatTwoLevels)                  // [1,2,[3]]


