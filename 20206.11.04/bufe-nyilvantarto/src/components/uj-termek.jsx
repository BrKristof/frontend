import { lekerdez,felvesz } from "../data";


export default function UjTermek({termekek,setTermekek}){

    function onSave(){
        const id = Math.max(...termekek.map(x => x.id))+1;
        const nev = document.getElementById("input-nev").value
        const ar = document.getElementById("input-ar").value*1
        const kaloria = document.getElementById("input-kaloria").value*1

        felvesz({
            id:id,
            termeknev:nev,
            ar:ar,
            kaloria:kaloria,
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
                            <input type="text" id="input-nev"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Ár</td>
                        <td>
                            <input type="number" id="input-ar" min={0}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Kalória</td>
                        <td>
                            <input type="number" id="input-kaloria" min={0} />
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