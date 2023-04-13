// console.log(document.cookie)
// document.cookie = " name=vicky103040";
// document.cookie = "name2 = joshi82929";
//* assigning different value to same key will eventually overwrite the key

//  document.cookie = "name = basant joshi"
// console.log(document.cookie)
let key = prompt("Enter your key")
let value = prompt("Enter your value")

document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
console.log(document.cookie)

//you can decode it by using decodeuricomponent(` `)
//* syntex 2  document.cookie = encodeURIComponent(name)+ `=` encodeURIComponent(value)s
//* document.cookie = "user = name; path = /a ; expires = Thrusday , 28 march 2029 "
 //* cookie will available on the selected path i.e /a neither on its branch page or previous page