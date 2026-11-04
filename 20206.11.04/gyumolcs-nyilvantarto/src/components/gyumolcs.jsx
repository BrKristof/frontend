export default function Gyumolcs({nev,rosttartalom,cukortartalom,onTorles}){

    return(
        <div>
            <p>Név: {nev}</p>
            <p>Rosttartalom: {rosttartalom}</p>
            <p>Cukortartalom: {cukortartalom}</p>
            <button onClick={onTorles}>Törlés</button>
        </div>
    )
}