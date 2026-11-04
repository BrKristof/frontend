export let GYUMOLCS = [
    {
        nev:"alma",
        rosttartalom: 4,
        cukortartalom: 13
    },
    {
        nev:"Kókusz",
        rosttartalom: 9,
        cukortartalom: 6
    },
    {
        nev:"Avokádó",
        rosttartalom: 6,
        cukortartalom: 1
    }
]

export function listazGyumi(){
    return GYUMOLCS
}

export function felvesz(ujGyumi){
    GYUMOLCS = [...GYUMOLCS, ujGyumi]
}

export function torol(gyumolcsNev){
    GYUMOLCS = GYUMOLCS.filter(x => x.nev != gyumolcsNev )
}

