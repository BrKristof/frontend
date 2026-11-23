const $ = (id) => document.getElementById(id)

const url = "https://randomuser.me/api/"

async function generate() {
    
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)

    $("img").src = data.results[0].picture.large

    let name = `${data.results[0].name.first} ${data.results[0].name.last}`
    $("name").innerText = name

    let address = `Address: ${data.results[0].location.country}, ${data.results[0].location.city} ${data.results[0].location.state} ${data.results[0].location.street.name} ${data.results[0].location.street.number}`
    $("address").innerText = address

    $("email").innerText = `E-mail: ${data.results[0].email}`

    $("phone").innerText = `Phone: ${data.results[0].cell}`



}

$("btn").addEventListener("click",generate)
