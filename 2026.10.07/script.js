const key = "339843db01dd3cc948b23b798aed58aa"
const link = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={339843db01dd3cc948b23b798aed58aa}"
const cors = "https://cors-anywhere.herokuapp.com"

const weatherType = new Map([
    ["clear sky","https://openweathermap.org/payload/api/media/file/01d.png"],
    ["few clouds","https://openweathermap.org/payload/api/media/file/02d.png"],
    ["scattered clouds","https://openweathermap.org/payload/api/media/file/03d.png"],
    ["broken clouds","https://openweathermap.org/payload/api/media/file/04d.png"],
    ["shower rain","https://openweathermap.org/payload/api/media/file/09d.png"],
    ["rain","https://openweathermap.org/payload/api/media/file/10d.png"],
    ["thunderstorm","https://openweathermap.org/payload/api/media/file/11d.png"],
    ["snow","https://openweathermap.org/payload/api/media/file/13d.png"],
    ["mist","https://openweathermap.org/payload/api/media/file/50d.png"]
    
])

const $ = (id) => document.getElementById(id)
function elem(elem,text,appendto){
    const e = document.createElement(elem)
    e.innerText = text
    appendto.appendChild(e)
}

async function Kereses(keresett=undefined){

    $("container").innerHTML = ""
    
    let keresett = $("city").value
    keresett  = keresett.trim()

    const url = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=${keresett}&units=metric&appid=${key}`
    
    try{
        const response =  await fetch(url)
        if(response.status == 404){
            throw new Error()
        }
        const data = await response.json()
    }
    catch{
        
    }

    
    

    console.log(data)

    cardCreation(`Hőmérséklet: ${data.list[0].main.temp}`,`Páratartalom: ${data.list[0].main.humidity}`,`Nyomás: ${data.list[0].main.pressure}`,determineWeather(data.list[0].weather[0].description))
    cardCreation(`Hőmérséklet: ${data.list[8].main.temp}`,`Páratartalom: ${data.list[8].main.humidity}`,`Nyomás: ${data.list[8].main.pressure}`,determineWeather(data.list[8].weather[0].description))
    cardCreation(`Hőmérséklet: ${data.list[16].main.temp}`,`Páratartalom: ${data.list[16].main.humidity}`,`Nyomás: ${data.list[16].main.pressure}`,determineWeather(data.list[16].weather[0].description))
    cardCreation(`Hőmérséklet: ${data.list[24].main.temp}`,`Páratartalom: ${data.list[24].main.humidity}`,`Nyomás: ${data.list[24].main.pressure}`,determineWeather(data.list[24].weather[0].description))
    cardCreation(`Hőmérséklet: ${data.list[32].main.temp}`,`Páratartalom: ${data.list[32].main.humidity}`,`Nyomás: ${data.list[32].main.pressure}`,determineWeather(data.list[32].weather[0].description))

    console.log(data.list[0].weather[0].description)
    console.log(determineWeather(data.list[0].weather[0].description))

    

}

function cardCreation(tmpText,humText,pressText,img){

    const card = document.createElement('div')
    card.classList.add("days")

    const weatherImg = document.createElement('img')
    weatherImg.src = img
    card.appendChild(weatherImg)
    const temp = elem('h2',tmpText,card)
    const hum = elem('h2',humText,card)
    const press = elem('h2',pressText,card)


    $("container").appendChild(card)
}

function determineWeather(weather){
    const w = weatherType.get(weather)
    return w
}




$("search").addEventListener('click', Kereses)