
// Two levels deep
let twoLevels = [5,[6],[[7]]]            

let flatTwoLevels = twoLevels.flat()

console.log(flatTwoLevels)                  // [5,6,[7]]


// Five levels deep

let fiveLevels = [2,[[2]],[[[[[2]]]]]]      // <-- The deepest array is nested 5 times


// If we go any less than 5 level, we end up with remaining nested arrays unflattened

let almostFlatFive = fiveLevels.flat(4)     

console.log(almostFlatFive)                 // [2,2,[2]]

// Fully flattened array

let flatFiveLevels = fiveLevels.flat(5)     // <-- We need to go an minimum 5 levels deep to flatten this array

console.log(flatFiveLevels)                 // [2,2,2]




