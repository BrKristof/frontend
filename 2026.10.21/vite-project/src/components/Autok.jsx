import Auto from "./Auto.jsx"
import { listaz, torol } from "../data.jsx"

export default function Autok(autok,setAutok){
    function handeTorles(rendszam){
        //1. az eredeti tömbből törlök
        torol(rendszam)
        //2. frissítem a state-et!
        setAutok(listaz())
    }
    return (
        autok.map(x => <Auto key={x.rendszam} {...x} onTorles={() => handeTorles(x.rendszam)} />)
    )
}