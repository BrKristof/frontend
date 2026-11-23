let PEKARU = [
    {
        fajta:"fánk",
        iz:"epres",
        ar:300
    },
    {
        fajta:"croissant",
        iz:"csokis",
        ar:400
    },
    {
        fajta:"fornetti",
        iz:"csokis",
        ar:250
    },
]

export function lekerdez(){
    return PEKARU
}

export function beszur(ujPekaru){
    PEKARU = [...PEKARU, ujPekaru]
}

export function torol(fajta){
    PEKARU = PEKARU.filter(x => x.fajta != fajta)
}
