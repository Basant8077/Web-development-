// ! question 1

let a = function (event){

    alert("This is first alert on first button")

}

let b = function(event){
    console.warn("This is warning under second button")
    alert("This is second button")
}

let first =  document.getElementById("first")
let second =  document.getElementById("second")


first.addEventListener("click" , a);
second.addEventListener("click" , b);

//* method 2 :-   is with html onclick = "console.log('')"


//! question 2

let x = function(){
    window.location= "https://google.com"
    window.focus();
}
document.getElementById("google").addEventListener("click" , x)
//* similarly for others

//! question 3

const fetchcontent = async(url)=>{
    con = await fetch(url);
    let a = await con.json()
    return a
}

setInterval(async function(){
    let url = 'https://jsonplaceholder.typicode.com/todos/1'
    console.log(await fetchcontent(url))
},3000)

//! question 4 

// setInterval(async function(){
//     document.querySelector("#bulb").classList.toggle("bulb")
// },300)