export let AUTOK = [
    {
        rendszam:"AAA-964",
        evjarat:2010,
        fogyasztas: 6.6,
    },
    {
        rendszam:"CCC-752",
        evjarat:2026,
        fogyasztas:7.1
    },
    {
        rendszam: "BBB-532",
        evjarat:2026,
        fogyasztas: 5.1
    },

];

export function listaz() {
    return AUTOK
}

export function felvesz(ujauto){
    //AUTOK.push(ujauto) -> nem lesz jó
    if(AUTOK.find(a => a.rendszam == ujauto.rendszam)){
        return
    }

    AUTOK = [...AUTOK, ujauto]
}

export function torol(rendszam){
    AUTOK = AUTOK.filter(a => a.rendszam != rendszam)
}