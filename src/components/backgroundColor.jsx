import { useEffect } from "react";

const BackgroundColor = () => {
    // para manipular eventos, se debe usar useEffect
    // asi nos adherimos a la premisa de que los eventos en
    // react deben suscribirse y desuscribirse con el renderizado
    useEffect(() => {
        // dentro de useEffect, creamos la funcion q se debe ejecutar
        // cuando se registre un evento.
        // NOTA: El useEffect tiene dependencia vacia para q cargue 1 sola vez
        const changeBackground = () => {
            let bgColo = "#fff"
            let txtColo = "#000"
            if (window.innerWidth < 600) {
                bgColo = "blue";
                txtColo = "white"
            } else if (window.innerWidth < 800) {
                bgColo = "green"
                txtColo = "pink"
            } else {
                bgColo = "red"
                txtColo = "yellow"
            }

            // accedemos al dom (en este caso) para manipularlo frente a los eventos
            document.body.style.backgroundColor = bgColo;
            document.querySelector("p").style.color = txtColo;
        }

        // window.addEventListener agrega el event listener
        window.addEventListener("resize", changeBackground)

        // se debe agregar un remover luego de agregarlo
        return () => {
            window.removeEventListener("resize", changeBackground);
        }
    }, [])
    return <p>I change the bg color</p>
}

export default BackgroundColor;