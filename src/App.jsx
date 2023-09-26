import { useState } from 'react'
import './App.css'
import BackgroundColor from './components/backgroundColor'
import TextField from './components/TextField'
import ColorSelector from './components/ColorSelector'
import ContactForm from './components/ContactForm'

function App() {
  const [show, setShow] = useState(true)

  const handleChange = (event) => {
    console.log(event)
    // event solo devuelve la info del evento
    // event.target devuelve el elemento al q se adhiere el event listener
    setShow(!setShow);
  }
  return (
    <>
      <p>App</p>
      <button onClick={handleChange}>{show ? "on" : "off"}</button>
      {show && <BackgroundColor />}
      <TextField />
      <p>elegir color</p>
      <ColorSelector />
      <br />
      <ContactForm />
    </>
  )
}

export default App
