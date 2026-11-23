import { useState } from 'react'
import './App.css'
import { lekerdez } from './data'
import Pekaruk from './components/pekaruk'
import UjPekaru from './components/uj-pekaru'

function App() {
  const [pekaruk, setPekaruk] = useState(lekerdez())

  return (
    <>
      <main>
        <section id='ujpekaru'>
          <UjPekaru pekaruk={pekaruk} setPekaruk={setPekaruk}/>
        </section>
        <section id='pekaruk'>
          <Pekaruk pekaruk={pekaruk} setPekaruk={setPekaruk}/>
        </section>


      </main>
    </>
  )
}

export default App
