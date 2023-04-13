// sessionStorage.setItem("name", "vicky")
//avalibale only ata perticular tab

// sessionStorage.getItem("name")
// "vicky"
// sessionStorage.length()
// Uncaught TypeError: sessionStorage.length is not a function
//     <anonymous> debugger eval code:1
// debugger eval code:1:16
// sessionStorage.length
// 2
// sessionStorage.clear
// function clear()

// sessionStorage.length
// 2
// sessionStorage.clear()
// undefined
// sessionStorage.length
// 0
// sessionStorage.removeItem("name")
// undefined
//* storage event
window.onstorage=(event)=>{
    console.log("changed")
    console.log(event)
}
localStorage.setItem("name","vicky")
localStorage.setItem("name","joshi")
// localStorage.setItem("name","joshi")
