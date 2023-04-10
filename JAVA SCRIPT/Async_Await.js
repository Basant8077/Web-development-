// async function vicky(){
//     return 7;
// }
// vicky().then((x)=>{
//     console.log(x)
// })

async function vicky() {
    let Weather_delhi = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(" 40 deg ")
        }, 3000)
    })
    let Weather_uttrakhand = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(" 20 deg ")
        }, 5000)
    })

    //! method 1
    // Weather_delhi.then(alert)
    // Weather_uttrakhand.then(alert)

    //! method 2

    console.log("Featching delhi weather please wait...")
    let delhiw = await Weather_delhi
    console.log("Featched delhi weather ")

    console.log("Featching uttrakhsnd weather please wait...")
    let uw = await Weather_uttrakhand
    console.log("Featched uttrakhand weather ")

    return [delhiw, uw]
}

 const  joshi = async()=>{
    console.log("Hey i am  waiting")
}

//* no reason for joshi to wait for vicky since both function run i parallel

// console.log("Welcome to weather control room")

// let a = vicky()
// a.then((value) => {
//     console.log(value)
// })
// let b = joshi()

//! but if you want to follow the flow of execution

const main1 = async()=>{
    console.log("Welcome to weather control room")

    let a = await vicky()
    let b = await joshi()
   
    //*     now first vicky will run then joshi 
    
}
main1()