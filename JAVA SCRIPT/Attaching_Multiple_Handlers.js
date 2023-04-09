
let p = new Promise((resolve, reject) => {

    console.log("Promice is not resolved")

    setTimeout(()=>{
        resolve(7)
    },2000)
})

//* Multiple handles they will run independently
p.then((value)=>{
    console.log("Promice is resolved with value " + value)
})

p.then((value)=>{
    console.log("Hurrey what a delightfull day")
})