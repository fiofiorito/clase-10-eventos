import { useState } from "react"

const ContactForm = () => {
    // para formularios conviene armar una estructura tipo objeto en donde pasamos
    // cada name de cada input
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        message: ""
    });

    // con una funcion manejamos la informacion de esta manera
    const handleUserData = (event) => {
        setUserData({
            // toma los valores q ya tiene
            ...userData,
            // toma dinamicamente el nombre de la propiedas (q proviene del input)
            [event.target.name]: event.target.value
        });
        console.log(userData)

    }

    const sumbit = (event) => {
        event.preventDefault()
        console.log("info enviada:", userData)
    }
    return <form>
        <div>
            <label htmlFor="name">Nombre</label>
            <input name="name" type="text" placeholder="nombre" onChange={handleUserData} />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input name="email" type="email" placeholder="email" onChange={handleUserData} />
        </div>
        <div>
            <label htmlFor="message">Mensaje</label>
            <textarea name="msg" placeholder="tu mensaje" onChange={handleUserData} />
        </div>
        <button onClick={sumbit} type="sumbit">enviar</button>
    </form>
}

export default ContactForm;