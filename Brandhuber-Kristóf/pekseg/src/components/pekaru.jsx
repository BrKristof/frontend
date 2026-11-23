export default function Pekaru({fajta,iz,ar,onTorol}){


    return (
         <div id="pekaru">
            <p>Fajta: {fajta}</p>
            <p>Íz: {iz}</p>
            <p>Ár: {ar}</p>
            <button onClick={onTorol}>Törlés</button>
         </div>
    )
}