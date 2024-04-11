// function additionD(){
//          setTimeout(function(){
//          console.log("D is executed")
//        },3000)
//     }
    
//      function additionC(){ 
//             console.log("C")
       
    
//     }
//      additionD()
//      additionC()



// function getInfo(){
//     setTimeout(function(){
//         console.log("user created")
//     },3000)
//     setTimeout(function(){
//         console.log("get id")
//     },2000)
//     setTimeout(function(){
//         console.log("get info")
//     },1000)
// }
// getInfo()

// function custInfo( ){
//     setTimeout(function(){
//         console.log("create customer")
//     },3000)
//     setTimeout(function(){
//         console.log("KYC approved")
//     },2000)
//     setTimeout(function(){
//         console.log("Disburse loan")
//     },1000)
// }
// custInfo()

// function custInfo(){
//     setTimeout(function(){
//         console.log("create customer")
//     setTimeout(function(){
//         console.log("KYC approved")
//     setTimeout(function(){
//         console.log("disburse loan")
//     },1000)    
//     },2000)    
//     },3000)
// }
// custInfo()
function userCreated(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user created")
        },3000)
    })
}

function getId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("get id")
        },2000)
    })
}

function getInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("get info")
        },1000)
    })
}
// userCreated()
// .then(function(strr){
//     console.log(strr)
//     return getId()
// })
// .then(function(trs){
//     console.log(trs)
//     return getInfo()
// })
// .then(function(str){
//     console.log(str)

// })


async function getUserInfo(){
    let a = await userCreated()
    console.log(a)
    let b = await getId()
    console.log(b)
    let c  = await getInfo()
    console.log(c)

}
getUserInfo()