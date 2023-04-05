//! method 2
// let a = document.getElementsByClassName("container")[0]
// a.onmouseenter  = () =>  {
//     let b = document.getElementsByClassName("container")[0]
//     b.innerHTML="This is new inner html"
// }

let x = function (e) {
    // alert("hello world1")
    //!  e = event
    console.log(e)
    // console.log(e.target , e.clintx , e.clinty)

}

// let y = function (e) {
//     alert("hello world2")
// }
let elem = document.getElementById("btn")
elem.addEventListener('click', x)

// elem.addEventListener('click', y)

let a = prompt("What is your fav number")


//* if( a == '2'){
//*     elem.removeEventListener('click',function({     })
//*     }

//!  NOTE : - same function object pass karna hoga
if (a == '2') {
    elem.removeEventListener('click', x)
}