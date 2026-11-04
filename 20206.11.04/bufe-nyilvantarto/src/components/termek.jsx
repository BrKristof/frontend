export default function Termek({id,termeknev,ar,kaloria,onTorles}){

    return(
        <div className="termek">
            <p>Id: {id}</p>
            <p>Terméknév: {termeknev}</p>
            <p>Ár: {ar}</p>
            <p>Kalória: {kaloria}</p>
            <button onClick={onTorles}>Törlés</button>
        </div>
    )
}