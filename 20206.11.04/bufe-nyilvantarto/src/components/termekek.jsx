import Termek from "./termek.jsx";
import { torol, lekerdez } from "../data.jsx";

export default function Termekek({termekek,setTermekek}){
    function handleTorles(id){
        torol(id)

        setTermekek(lekerdez())
    }

    return termekek.map(x => <Termek key={x.id} {...x} onTorles={() => handleTorles(x.id)} />)
}