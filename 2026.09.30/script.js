const typeMap = new Map([
    ["normal", "#A8A77A"],
    ["fire", "#F08030"],
    ["water", "#6390F0"],
    ["electric", "#F7D02C"],
    ["ghost", "#735797"],
    ["flying", "#81B9EF"],
    ["dragon", "#6F35FC"],
    ["bug", "#A6B91A"],
    ["grass","#7AC74C"],
    ["ice", "#96D9D6"],
    ["fighting", "#C22E28"],
    ["poison", "#A33EA1"],
    ["ground", "#CC9F4F"],
    ["psychic", "#F85888"],
    ["rock", "#B6A136"],
    ["dark", "#705746"],
    ["steel", "#B7B7CE"],
    ["fairy", "#D685AD"]

]);



const $ = id => document.getElementById(id)

const url = "https://pokeapi.co/api/v2/pokemon/"

let getPokeData = async(name="") => {
    let finalUrl
    if(name ==""){
        let id = Math.floor(Math.random()*1025+1)
        finalUrl= url + id
        
    }
    else{
        finalUrl = url + name
        
    }
    

    try{
        const response = await fetch(finalUrl)
        if(response.status == 404){
            throw new Error();
        }
        const data = await response.json()
        $("error").style.display = "none"

        console.log(data)
        fillCard(data)
    }
    catch(err){
        $("error").style.display = "block"
    }
    
    

    
}

let fillCard = data => {
    const hp = data.stats[0].base_stat
    const img = data.sprites.other["official-artwork"].front_default
    let name = data.name
    name = name[0].toUpperCase() + name.substring(1);
    const attack = data.stats[1].base_stat
    const defense = data.stats[2].base_stat
    const speed = data.stats[5].base_stat

    const types = data.types

    $("hp").innerText = `HP: ${hp}`
    $("img").src = img
    $("name").innerText = name
    $("attack").innerText = attack
    $("defense").innerText = defense
    $("speed").innerText = speed

    appendTypes(types)
    styleCard(types[0].type.name)

}

let appendTypes = types => {
    $('types').innerHTML = ""
    for(let i=0; i < types.length; i++){
        let span  = document.createElement('span')
        span.textContent = types[i].type.name
        $("types").appendChild(span)
    }
}

let styleCard = type => {
    const color = typeMap.get(type)
    $("card").style.background = `radial-gradient(circle at 50% 0%, ${color} 38%, #fff 40%)`
    $("card").querySelectorAll("#types span").forEach(typeSpan => {
        typeSpan.style.backgroundColor = color
    })
    
}

$('btn').addEventListener('click',getPokeData)
$('btn2').addEventListener('click', () => {
    const pokename = $('poke-name').value
    getPokeData(pokename)
})