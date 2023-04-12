// let p1 =  new Promise((resolve, reject) => {
    
//     setTimeout(()=>{
//         console.log("The promice will resolve in 2 sec")
//     },2000)
//     resolve(56)
// });

// p1.then((value)=>{
//     console.log(value) //* value of fist promise i.e 56
//     //* custom promice
//     let p2 = new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve("Promice 2")
//         },3000)
//     })
//     return p2
// }).then((value)=>{
//     console.log("We are done")
//      console.log(value) //* value of p2 promise = promise 2
//     return 2
// }).then((value)=>{
//     console.log("Now we are pakka done")
        // console.log(value) //* value of previous then i.e 2
// })

//! load script function

const loadscript=(url)=>{
    return new Promise((resolve, reject) => {

        let script = document.createElement("Script")
        script.src = url;
        
        document.head.appendChild(script)
        script.onload=function(){
            resolve(1)
        }
        
        script.onerror=()=>{
            reject(0)
        }
    })
}
let p1 =loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")

p1.then((value)=>{
    console.log(value)
    console.log("Script has been loaded ")
    return loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
}).then((value)=>{
    console.log("Second script ready")
})

p1.catch((value)=>{
    console.log("We are sorry we can't load script ")
})