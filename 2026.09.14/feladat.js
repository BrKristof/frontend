const jellemzok = [
    "Nagy Mária;164;59",
    "Kiss Géza;177.57;64.5",
    "Tóth Bianka;158.3;49",
    "Kálmán Béla;188.1;79",
    "Rácz Teréz;174.18;62.5",
];
 
/* Feladat:
Dolgozzuk fel a tömb elemeit!
A tömb minden egyes elemét vágjuk szét a 3 különböző információ mentén (név;magasság;súly)
Írjuk ki a konzolra soronként az egyes emberek tulajdonságát (helytöltő nullákra figyelni!)
Pl.: Név: Kiss Géza, Magasság: 177.57 cm, Súly: 64.50 kg
     Név: Nagy Mária, Magasság: 164.00 cm, Súly: 59.00 kg
*/

for(let i = 0; i < jellemzok.length; i++){
    const sor = jellemzok[i].split(";")
    console.log(sorToString(sor))
}

function sorToString(sor){
    let nev = sor[0]
    let magassag = sor[1]
    if(magassag.includes('.')){
        magassag = magassag.padEnd(6,'0')
    }
    else{
        (magassag = magassag + '.').padEnd(6,'0')
    }
    let suly = sor[2]
    if(suly.includes('.')){
        suly = suly.padEnd(5,'0')
    }
    else{
        (suly = suly + '.').padEnd(5,'0')
    }


    return `Név: ${nev}, Magasság: ${magassag} cm, Súly: ${suly} kg`
}



