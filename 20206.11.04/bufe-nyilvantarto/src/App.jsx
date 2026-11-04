import { useState } from "react";
import "./App.css"

import Termekek from "./components/termekek.jsx";
import { lekerdez } from "./data.jsx";
import UjTermek from "./components/uj-termek.jsx";

function App(){
  const [termekek,setTermekek] = useState(lekerdez())

  return(
    <>
      <header>
        <h1>Termékek</h1>
      </header>
      <main>
        <section>
          <h2>Új termél felvétele</h2>
          <div id="uj-termekek">
            <UjTermek termekek={termekek} setTermekek={setTermekek}/>
          </div>
        </section>
        <section style={{width:"70%"}}>
          <h2>Termékek listája</h2>
          <div id="termekek">
            <Termekek termekek={termekek} setTermekek={setTermekek}/>
          </div>
        </section>
        
        
      </main>
    </>
  )
}

export default App