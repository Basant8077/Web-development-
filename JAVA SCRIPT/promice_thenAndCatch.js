let p1 =  new Promise((resolve, reject) => {
    
    console.log("promice is pending")
    setTimeout(function(){
        // console.log("i am a promice and i am fullfilled")

        resolve(true)
        // reject(new Error("Hi i am a error"))
    },3000)

});
let p2 =  new Promise((resolve, reject) => {
    
    console.log("promice is pending")
    setTimeout(function(){
        // console.log("i am a promice and i am rejected")

        // * resolve(true)
        reject(new Error("Hi i am a error"))
    },3000)

});

p1.then((value)=>{
    console.log(value)
})

p2.catch((error)=>{
    console.log(error)
})
// console.log(p1,p2)