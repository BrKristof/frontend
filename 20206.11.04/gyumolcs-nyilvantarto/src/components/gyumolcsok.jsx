import Gyumolcs from "./gyumolcs.jsx";
import { listazGyumi,torol } from "../data";

export default function Gyumolcsok({gyumolcsok,setGyumolcsok}){
    function handleTorles(id){
        torol(id)

        setGyumolcsok(listazGyumi())
    }

    return(
        gyumolcsok.map(x => <Gyumolcs key={x.nev} {...x} onTorles={() => handleTorles(x.nev)}/>)
    )
}