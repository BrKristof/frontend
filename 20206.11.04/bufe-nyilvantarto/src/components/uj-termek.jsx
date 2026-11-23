import { useRef } from "react";
import { lekerdez,felvesz } from "../data";


export default function UjTermek({termekek,setTermekek}){


    const input = {
        nev: useRef(),
        ar:useRef(),
        kaloria:useRef()
    }

    function onSave(){
        const id = Math.max(...termekek.map(x => x.id))+1;
        //const nev = document.getElementById("input-nev").value
        //const ar = document.getElementById("input-ar").value*1
        //const kaloria = document.getElementById("input-kaloria").value*1

        felvesz({
            id:id,
            nev:input.nev.current.value,
            ar:input.ar.current.value,
            kaloria:input.kaloria.current.value,
        })

        setTermekek(lekerdez())

    }

    return(
        <form>
            <table>
                <tbody>
                    <tr>
                        <td>Terméknév</td>
                        <td>
                            <input type="text" ref={input.nev} />
                        </td>
                    </tr>
                    <tr>
                        <td>Ár</td>
                        <td>
                            <input type="number" ref={input.ar} min={0}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Kalória</td>
                        <td>
                            <input type="number" ref={input.kaloria} min={0} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="button" onClick={onSave}>Mentés</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}