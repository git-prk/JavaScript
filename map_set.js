

// let roles = new Map()
// let roles2 = new Map([
//     [1,"admin"],
//     [2,"manager"],
//     [3,"customber"]
// ])

// console.log(roles2)

// // program 2
// let q1 = roles2.size
// console.log(q1)

// // set()
// roles2.set(4,"supoort")
// console.log(roles2)

// //get()
// let q2 = roles2.get(3)
// console.log(q2)

// //has()
// let q3 = roles2.has(3)
// console.log(q3)

// //clear()
// //roles2.clear()
// //console.log(roles2)

// // delete()
// roles2 = new Map([
//     [1,"admin"],
//     [2,"manager"],
//     [3,"customber"]
// ])

// roles2.delete(1)
// console.log(roles2)

// // forEach()
// roles2.forEach(function(v,k){
//     console.log(v,k)
// })

// // key()
// for(let key of roles2.keys()){
//     console.log(key)
// }
// // values()
// for(let val of roles2.values()){
//     console.log(val)
// }

// for(let [k,v] of roles2.entries()){
//     console.log(k,v)
// }

// roles2.set(2,"newValue")
// console.log(roles2)

// array 

let names = ["chinmay","shirish","ninad","amol","chinmay"]
console.log(names)

// define without elements 
let names2 = new Set()
console.log(names2)

// with elements
let names3 = new Set(["chinmay","sarika","chinmay","amol"])
console.log(names3)


names3.add("vedant")
console.log(names3)

let q1 = names3.has("chinmay")
console.log(q1)

names3.delete('chinmay')
console.log(names3)

names3.forEach(function(el){
    console.log(el)
})
console.log("check commit")


// let students = new Set([
//     {firstName:"sarika",lastName:"pansare"},
//     {firstName:"poorva",lastName:"vyas"}
// ]) 



// for(let key of students.keys()){
//     console.log(key)
// }
// for(let key of students.values()){
//     console.log(key)
// }
// for(let [k,v] of students.entries()){
//     console.log(k,v)
// }