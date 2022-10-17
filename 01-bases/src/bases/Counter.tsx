import { useState } from "react";

/*
    Se define la interfaz que el componente recibira como propiedades,
    los parametros opcionales tiene un ? antes de la definicion de tipo.

    Es importante definir las propiedades en la interfaz, por que asi evitamos
    errores de compilacion y ejecucion del codigo.
*/
interface Props{
    initialValue?: number
}

export const Counter = ({initialValue = 0}: Props) => {
    const [counter, setCounter] = useState(initialValue);
    const handleClick = () => setCounter(prev => prev + 1);

    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}
