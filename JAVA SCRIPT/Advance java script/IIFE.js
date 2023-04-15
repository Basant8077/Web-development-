//Immediaely invoked Function expression

let a =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(69)
        },3000)
    })
}
(async()=>{
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
})()
// console.log(b)   b is not defined