// let elem = document.body.firstElementChild.firstElementChild
// console.log(elem);
// elem.style.color="red"
// let id3 = document.body.getElementsByTagName("p")
// console.log(id3)

// //! inner Html valid for element node only

let elem = document.getElementById("id3")
console.log(elem.innerHTML)
elem.innerHTML="This is changed inner html"
console.log(elem.innerHTML)

// //! OUTER HTML

let eleme = document.getElementById("id2")
console.log(eleme)
console.log(eleme.outerHTML)
elem.outerHTML="<div> This is inside a div </div>"
console.log(eleme.outerHTML)

//* text content (copies a website as a text)
console.log(document.body.textContent)

console.log(document.body.firstChild.data)