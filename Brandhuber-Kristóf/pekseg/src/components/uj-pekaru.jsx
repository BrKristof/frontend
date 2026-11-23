import { beszur, lekerdez } from "../data"

export default function UjPekaru({pekaruk,setPekaruk}){
    function onSave(){
        const fajta = document.getElementById("fajta").value
        const iz = document.getElementById("iz").value
        const ar = document.getElementById("ar").value*1

        const index = pekaruk.findIndex(x => x.fajta == fajta)
        if(index !== -1){
            return
        }

        beszur({
            fajta:fajta,
            iz:iz,
            ar:ar
        })

        

        setPekaruk(lekerdez())

    }

    return (
        <form >
            <table>
                <tbody>
                    <tr>
                        <td>Fajta:</td>
                        <td><input type="text" id="fajta" /></td>
                    </tr>
                    <tr>
                        <td>Íz:</td>
                        <td><input type="text" id="iz"/></td>
                    </tr>
                    <tr>
                        <td>Ár:</td>
                        <td><input type="number" min={1} id="ar" /></td>
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