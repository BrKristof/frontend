let s = "Ez egy \"egyszerű\" string" //escapelés "\" ezzel
let s2 = `akár 
több sorba 
is lehet 
tördelni a stringet`

console.log(s)
// a string tömbként is kezelhető
console.log(s[3])
console.log(s.length)
console.log(s[49])
console.log(s[-2]) //nincs negatív index

//string kezelő függvények
console.log(s.charAt(9))
console.log(s.at(-2)) //negatív indexre is műküdik 
console.log(s.indexOf("e"))
console.log(s.lastIndexOf('e'))
console.log(s.includes("egy"))
console.log(s.substring(9,10)) // sub: [mettől-meddig[
console.log(s.replace(' ','-'))
console.log(s.replaceAll(' ','-'))

let nev = "  Özv. Kolompár Mária   "
console.log(nev.trim())

let ido = "9:3" // igy kéne kinézzen : 09:03
console.log(ido.substring(0,1).padStart(2,'0') + ":" + ido.substring(2,3).padStart(2,"0"))

let szam = "13.7" // de én 2 tizedes jegyet akarok kiírni
console.log(szam.padEnd(5,'0'))

//Konkatenáció
console.log(s.concat(" még valami..."))
console.log(s + " még valami...")

//Módosítás
s[0] = 'A'      //ilyen nem lehet csinálni
console.log(s)
    //helyette :
s = 'A' + s.substring(1)
console.log(s)

s = s.substring(0,6) + "X" + s.substring(7)
console.log(s)

// vágás
let adatok = "Sipi Rupi_Szekszárd_tanuló_pörkölt"
let adatokStringTomb = adatok.split('_')
console.log(adatokStringTomb)