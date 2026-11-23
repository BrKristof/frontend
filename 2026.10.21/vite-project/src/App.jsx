import { useState } from 'react'
import './App.css'

import Autok from './components/autok.jsx'
import { listaz } from './data.jsx'
import UjAuto from './components/Ujauto.jsx'

function App() {
  const [autok,setAutok] = useState(listaz())

  return (
    <>
      <header>
        <h1>Autó nyilvántartó</h1>
      </header>

      <main>
        <section style={{width:"60%"}}>
          <h2>Autók listája</h2>
          <div  id="autok" >
            <Autok autok={autok} setAutok={setAutok}/>
          </div>
          
        </section>
        <section >
          <h2>Új autó felvétele</h2>
          <div id="uj-autok">
            <UjAuto  autok={autok} setAutok={setAutok}/>
          </div>
          
        </section>
        
      </main>
    </>
  )
}

export default App
