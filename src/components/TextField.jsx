import { useState } from "react"

const TextField = () => {
    // Ejercicio para filtrar con el uso de eventos
    // SI EL INPUT CONTIENE VOCALES => NO MOSTRARLAS EN EL INPUT FIELD
    // Se tiene que usar el evento onKeyDown para el ejecicio.
    const [text, setText] = useState("")
    const changeInput = (event) => {
        setText(event.target.value);

    }

    // se crea una funcion q registra la tecla q se escribe y que
    // con includes() filtra a las vocales
    const manageKeys = (event) => {
        console.log(event.key);
        const vocales = "aeiou"
        if (vocales.includes(event.key) || vocales.toUpperCase().includes(event.key)) {
            event.preventDefault();
        }

    }

    return <div>
        {/* en el input llamamos a la funcion con el onKeyDown */}
        <input onChange={changeInput} onKeyDown={manageKeys} type={text} name="aaa" placeholder="aaa" />
    </div>
}

export default TextField;