import { useRef } from "react";
import { felvesz, listaz } from "../data";

export default function UjAuto({ autok, setAutok }) {
  // const [rendszam, setRendszam] = useState("");
  // const [evjarat, setEvjarat] = useState(2026);
  // const [fogyasztas, setFogyasztas] = useState(0.5);

  //const rendszam = useRef()
  //const evjarat = useRef()
  //const fogyasztas = useRef()

  const input = {
    rendszam: useRef(),
    evjarat: useRef(),
    fogyasztas: useRef()
  }

  function onSave() {
    const inputAuto = {
        rendszam: input.rendszam.current.value,
        evjarat: input.evjarat.current.value,
        fogyasztas: input.fogyasztas.current.value
    }
    felvesz(inputAuto);
    setAutok(listaz());
  }

  return (
    <form>
      <table>
        <tbody>
          <tr>
            <td>Rendszám</td>
            <td>
              <input type="text" ref={input.rendszam} placeholder="ABC-123"/>
            </td>
          </tr>
          <tr>
            <td>Évjárat</td>
            <td>
              <input type="number" min="1900" ref={input.evjarat} placeholder="2026" />
            </td>
          </tr>
          <tr>
            <td>Fogyasztás</td>
            <td>
              <input type="number" step="0.1" min="0.1" ref={input.fogyasztas} placeholder="5.2"/>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button type="button" onClick={onSave}>
                Mentés
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
