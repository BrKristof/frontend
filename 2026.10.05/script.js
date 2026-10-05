
const $ = (id) => document.getElementById(id)


async function Kereses(){
    let keresett = $("keresett").value
    keresett = keresett.trim()
    keresett = keresett.replaceAll(" ","+")

    //https://cors-anywhere.herokuapp.com/
    const url = `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${keresett}&media=music`

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    fillTable(data)

}

function fillTable(data){
    $("zenek").innerHTML = ""
    const rows = data.results
    for(let i = 0; i < rows.length; i++){
        let tr = document.createElement('tr')
        let sorszam  = CreateCell('td',(i+1)+"",tr)
        let eloado= CreateCell('td',rows[i].artistName,tr)

        let borito = document.createElement('td')
        let kep = document.createElement('img')
        kep.src = rows[i].artworkUrl60

        borito.appendChild(kep)
        tr.appendChild(borito)

        let cim = CreateCell('td',rows[i].trackName,tr)
        cim.onclick = () => {
            $("lejatszo").src = rows[i].previewUrl
        }
        cim.classList.add('play')

        let hossz = CreateCell('td',ms2Time(rows[i].trackTimeMillis) ?? "",tr)
        let ev = CreateCell('td',rows[i].releaseDate.substring(0,4),tr)
        let stilus = CreateCell('td',rows[i].primaryGenreName,tr)
        //primaryGenreName

        
        // ??  megvizsgalja van e tartalma az adott dolognak ha nem akkor a mogotte levo erteket adja meg neki

        

        


        $("zenek").appendChild(tr)
    }
}

$("kereses").addEventListener('click', Kereses)
$("keresett").addEventListener('keypress', (event) => {
    if(event.key == 'Enter'){
        Kereses()
    }
})

function ms2Time(input){
    if(!input){
        return undefined
    }

    let m = Math.floor(input/(60*1000))
    input = input-(m*1000*60)
    let s = Math.floor(input/(1000))
    let ms = input-(s*1000)

    let str = m.toString().padStart(2,'0') + ":";
    str += s.toString().padEnd(2,'0') + ":"
    str += ms.toString().padEnd(3,'0')

    return str
}

function CreateCell(type,fill,appendTo){
    const t = document.createElement(type)
    t.innerText = fill
    appendTo.appendChild(t)

    return t
}