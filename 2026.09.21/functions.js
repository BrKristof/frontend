

function getTime(){
    
    let time = new Date()
    let h = (time.getHours()+"").padStart(2,'0')
    let m = (time.getMinutes()+"").padStart(2,'0')
    let s = (time.getSeconds()+"").padStart(2,'0')
    let ms = (time.getMilliseconds()+"").padStart(3,'0')

    document.getElementById("time").innerText = `A pontos idő: ${h}:${m}:${s}:${ms}`
    setTimeout(getTime, 25)
}


/* Feladat:
    Irjuk ki a konzolra az elso 10 termeszetes szamot,  1 masodpercers idokozzel de ugy,
    hogy nem lehet hozza ciklust hasznalni
 */

let num = 1
function GetNums(){
    console.log(num)
    num++
    if(num > 10){
        return
    }
    setTimeout(GetNums,1000)
}

GetNums()
