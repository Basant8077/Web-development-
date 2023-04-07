//* ASYNC program is

// console.log("start")

// setTimeout(function(){
//     console.log("THis is inside function")
// },1000)  
// console.log("end")

//! callback
function loadscript(url,callback){

    let script = document.createElement('script')
    script.src=url

    script.onload = function(){
        console.log("sscript is loaded \n"+ url)
        callback( null ,url);
    }

    //! if some error occur in a script
    script.onerror = function(){
        alert("Script is showing some error")
        callback(new Error("url is giving some error"))
    }


    document.head.appendChild(script)
}
function good( Error, url){
    if(Error){
        console.log(Error)
        return
    }
    alert("good morning \n" + url)
}
loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js",good)