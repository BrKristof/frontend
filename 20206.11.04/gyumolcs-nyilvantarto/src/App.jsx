import Gyumolcsok from "./components/gyumolcsok.jsx";
import { useState } from "react";
import { listazGyumi } from "./data.jsx";

function App(){
  const [gyumolcsok,setGyumolcsok] = useState(listazGyumi())

  return(
    <>
      <main>
        <Gyumolcsok gyumolcsok={gyumolcsok} setGyumolcsok={setGyumolcsok}/>
      </main>
    </>
  )
}

export default App