// osztály != objektum

class Szemely{
    constructor(nev,foglalkozas,szuletesiEv){
        this.nev = nev
        this.foglalkozas = foglalkozas
        this.szuletesiEv = szuletesiEv
    }

    hanyEves(){
        const datum = new Date()
        return datum.getFullYear() - this.szuletesiEv
    }
}

class Alkalmazott extends Szemely{
    
    static bonusz = 10

    // nem akarom hogy belelássanak vagy módosítjak
    // ne lehessen közvetlenül beállítani csak setteren keresztüül közvetettül
    #azonosito = undefined


    constructor(nev,foglalkozas,szuletesiEv, fizetes){
        super(nev,foglalkozas,szuletesiEv)
        this.fizetes = fizetes
    }

    get azonosito() {return this.#azonosito}
    set azonosito(value) {if(typeof(value) == "number") this.#azonosito = value} 

    /**
     * bonuszt csak decemberben kapnak az emberek
     * -ha december van akkor bonusszal emelt a fizetes
     * ha nem akkor nem
     */
    fizetesEbbenAHonapban(){
        if((new Date()).getMonth == 11){
            return this.fizetes*(1+(Alkalmazott.bonusz/100))
        }
        return this.fizetes
    }
}

class Kisfonok extends Alkalmazott{

    #beosztott = undefined

    constructor(nev,foglalkozas,szuletesiEv,fizetes,beosztott){
        super(nev,foglalkozas,szuletesiEv,fizetes)
        if(beosztott >= 0 && beosztott <= 20)
            this.#beosztott = beosztott
    }

    get beosztott() {return this.#beosztott}

}




const bela = new Szemely("Vak Béla","ács",1975)
console.log(bela)
console.log(`${bela.nev} ${bela.hanyEves()} éves idén`)

const irenke = new Alkalmazott("Kovács Irén","recepciós",1960,523999)
irenke.azonosito = 21
console.log(irenke.azonosito)

console.log(irenke.fizetesEbbenAHonapban())

const isti = new Kisfonok('istán','gepesz',1990,531111,4)
console.log(isti)
