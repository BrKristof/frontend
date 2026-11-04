export let TERMEK = [
    {
        id:1,
        termeknev:"perec",
        ar:700,
        kaloria:200
    },
    {
        id:2,
        termeknev:"ropi",
        ar:400,
        kaloria:150
    },
    {
        id:3,
        termeknev:"chips",
        ar:600,
        kaloria:250
    },
    {
        id:4,
        termeknev:"szendvics",
        ar:700,
        kaloria:300
    }
]

export function lekerdez(){
    return TERMEK
}

export function felvesz(ujTermek){
    TERMEK = [...TERMEK,ujTermek]
}

export function torol(id){
    TERMEK = TERMEK.filter(x => x.id != id)
}