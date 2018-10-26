let msec=00
let sec=00
let min=00
let timer=0
const secSpeed=10

function showWatch(){
    msec+=10
    if(msec===1000){
        msec=0
        sec++
    }
    if(sec===60){
        sec=0
        min++
    }

    text=min+":"+sec+":"+msec
    document.getElementById("showTime").innerHTML=text
}

function startWatch(){
    clearInterval(timer)
    timer=setInterval(showWatch,secSpeed)
}

function stopWatch(){
    clearInterval(timer)
}

function resetWatch(){
    sec=00
    min=00
    hour=00
    text="00:00:00"
    document.getElementById('showTime').innerHTML=text
    clearInterval(timer)
}

