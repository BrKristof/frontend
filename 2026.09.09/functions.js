let szam = 3;
szam = 3.14;
let szoveg = "Szia uram!";
szoveg = 'hello-bello';

let osszefuzve = szoveg + szam;
osszefuzve = `A kedvenc szamom: ${szam}`;

let logikai = true;
logikai = false;

let n = null;
let u  = undefined;

let x = 0
if(x > 0){
    console.log('pozitiv')
}
else{
    console.log('nem pozitiv')
}

let i = undefined
for(i = 0; i<10;i++);
console.log(i)

let p = 2
while(p <= 10){
    console.log(p)
    p+= 2
}

///////
// Tömbök

let autok = ["Audi","BMW","Toyota","Kia"]
console.log(autok[0])
autok[1] = "Ford"
console.log(autok[1])


//Új elem hozzáfűzése
autok.push("Skoda")

//tömb bejarása
for(i = 0; i < autok.length; i++)
    console.log(`${i}.: ${autok[i]}`)
// ha egysoros a ciklusmag akkor el lehet hagyni a kapcsos zárojelet

console.log(`törölt elem ${autok.pop()}`)


// függvények
function udvozlet(){
    console.log("Üdvözöllek dicső lovag")
}

// y -> x2
let udv = () => { console.log("Üdv!")}

function negyzetreEmel(num){
    return num * num
}

// ha egy parameterem van elhagyhatom a zarojelet
// ha csak 1 return van elhagyhatom a zarojelet es a return-t is
let negyzet = num => num*num


// Tömbök... folyt
//elem szűrés
autok.filter(auto => auto == "Toyota");

//törlés
autok = autok.filter(auto => auto != "Toyota")

//index meghatározása érték alapján
autok.push("Honda","Mercedes","BYD")

console.log(autok.findIndex(auto => auto == "BYD"))

// Spread operator - elemeire bontja a tömböt
autok = ["Seat", ...autok, "Nissan"]

// Rest paraméter
//függvény amit szamokat ad össze és visszaadja a számok összegét

function osszead(...szamok){
    let osszeg = 0;
    for(let i = 0; i < szamok.length; i++){
        osszeg += szamok[i]
    }
    return osszeg
}

console.log(osszead(6,7,8))

//egyeb tömbkezelő function-ok

console.log(autok.includes("Opel"))
console.log(autok.includes("Honda"))

console.log(autok.toString())

console.log(autok.at(2)) // autok[2] ugyanaz csak useless
console.log(autok.shift()) //elso elem torlese

console.log(Array.isArray(szam))
console.log(Array.isArray(autok))