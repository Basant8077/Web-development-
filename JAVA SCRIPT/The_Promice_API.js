 let p1 = new Promise((resolve, reject) => {

    setTimeout(()=>{
        resolve("Value 1")
    },4000)
 })
 let p2 = new Promise((resolve, reject) => {

    setTimeout(()=>{
        //* resolve("Value 2")
        reject(new Error("Error"))
    },2000)
 })
 let p3 = new Promise((resolve, reject) => {

    setTimeout(()=>{
        resolve("Value 3")
    },3000)
 })

//  p1.then((value)=>{
//     console.log(value)
//  })
//  p2.then((value)=>{
//     console.log(value)
//  })
//  p3.then((value)=>{
//     console.log(value)
//  })

// let Promise_all = Promise.all([p1,p2,p3]) //? only work when all promices resolve

let Promise_all = Promise.allSettled([p1,p2,p3])
// let Promise_all = Promise.race([p1,p2,p3])
// let Promise_all = Promise.any([p1,p2,p3])
// let Promise_all = Promise.resolve(6)
// let Promise_all = Promise.reject(new Error("Error"))

Promise_all.then((value)=>{
    console.log(value)
})