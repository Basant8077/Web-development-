


function date(){
    let elem = document.getElementById("first")
    let a = new Date;
    let x = a.getDate()
    let y = a.getMonth()
    let z = a.getFullYear()

    elem.innerHTML=x +" "+y+" "+z 
}
setInterval(date,1000);

function time(){
    let id = document.getElementById("time")
    let a = new Date;
    let x = a.getHours()
    let y = a.getMinutes()
    let z = a.getSeconds()

    id.innerHTML=x+"\n"+y+"\n"+z
}
setInterval(time,1000)