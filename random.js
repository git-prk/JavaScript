let name  = ["pranita","pravin","ayansh","akshay","sameer"]

//              -5         -4      -3       -2         -1
// slice()
//               0          1       2        3       4
let names  = ["chinmay","mayuri","vinod","akshay","sameer"]

//              -5         -4      -3       -2         -1
//names.slice(startIndex,endIndex(not included))

let r1 = name.slice(2,5)
let r2 = names.slice(1)
let r3 = names.slice(1,3)
console.log(r1)
let fruits = ["apple","banana","grapes","chikoo"]
fruits.sort()
console.log(fruits)

// at()
//          0   1   2   3     4    5
let a11 = [111,222,333,4444,55555,66666] 
let b11 = a11.indexOf(333)
let b12 = a11.at(3)
console.log(b11)
console.log(b12)

// join()

let info = ["chinmay","deshpande",7709192441]
let w2 = info.join(' ')
console.log(w2)
console.log(typeof w2)

// lang  , framework , focus , exp
let n = [22,33,44]
n.reverse()
console.log(n)

let a = [22,33,44]
let b = [55,66,77]
let c = a.concat(b)
console.log(c)