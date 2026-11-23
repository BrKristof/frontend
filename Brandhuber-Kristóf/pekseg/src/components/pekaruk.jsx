import { lekerdez, torol } from "../data.jsx";
import Pekaru from "./pekaru.jsx";

export default function Pekaruk({pekaruk,setPekaruk}){
    function handleTorles(fajta){
        torol(fajta)

        setPekaruk(lekerdez())
    }

    return pekaruk.map(x => <Pekaru key={x.fajta} {...x} onTorol={() => handleTorles(x.fajta)}/>)
}