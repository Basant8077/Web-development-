//* to get class of an attribite

let firste = document.getElementById("one")
console.log(firste)

let a = firste.getAttribute("class")
console.log(a)

console.log(firste.hasAttribute("class"))  //* return type is either true or false 
console.log(firste.hasAttribute("has"))

 firste.setAttribute("class","vicky joshi")
 console.log(firste)

//* firste.removeAttribute("class")
//* console.log(firste)

console.log(firste.attributes) //! give  a nodemap

//* for personal attribute using data-
console.log(firste.dataset)
console.log(firste.dataset.game)
console.log(firste.dataset.play)
