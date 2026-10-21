import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Autok from './components/Autok.jsx'
import { listaz } from './data.jsx'

function App() {
  const [autok,setAutok] = useState(listaz())

  return (
    <>
      <header>
        <h1>Autó nyilvántartó</h1>
      </header>

      <main>
        <Autok autok={autok} setAutok={setAutok}/>
      </main>
    </>
  )
}

export default App
