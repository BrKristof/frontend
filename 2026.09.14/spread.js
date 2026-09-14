// Spread operátor

const szamok = [1,2,3,4,5]
console.log(szamok)
console.log(...szamok)

const ujSzamok = [-3,-4,-5,...szamok]
console.log(ujSzamok)

//Rest paraméter - függvény paramétereit gyúrja össze
function atlag(...args){
    let osszeg = 0
    for(let i = 0; i< args.length; i++){
        osszeg += szamok[i]
    }
    return osszeg/args.length

}
atlag(12,20)
atlag(1,5,7,8,3,9)
atlag(12,34,54,1,8,9,3,23,54,8,9,9,2)