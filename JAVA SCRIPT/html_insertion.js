let a = document.body.getElementsByTagName("div")[0]
//* for [1] [0] ke andar ka div

// a.innerHTML = a.innerHTML + "<h1> This is new </h1>" //! purane me he add kr dega
// a.innerHTML = "<h1> this is another option </h1>"  //! purana container ke sab elemnts and div ko remove kr new h1 insert kr dega

//! to add html 
let div = document.createElement("div")
div.innerHTML = "<h1> This is inside created div </h1>";

a.appendChild(div)
// a.prepend(div) 

// a.before(div) //* container se bhr kr dega a vale ke uper
// a.after(div) //* container se bhr a vale container se neche
a.replaceWith(div)  //! a ke container ko he rplace kr dega

