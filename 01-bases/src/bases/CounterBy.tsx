import { useState } from "react";

/*
    Se define la interfaz que el componente recibira como propiedades,
    los parametros opcionales tiene un ? antes de la definicion de tipo.

    Es importante definir las propiedades en la interfaz, por que asi evitamos
    errores de compilacion y ejecucion del codigo.
*/
interface Props {
    initialValue?: number,
}

//Interfaz de los estados
interface CountertState {
    counter: number,
    clicks: number,
}

export const CounterBy = ({ initialValue = 15 }: Props) => {

    /*
        Se aplica una interfaz de tipo a la declaracion de un useState,
        se puede destructurar los tipos de la interfaz
    */
    const [{counter, clicks}, setCounterState] = useState<CountertState>({
        counter: initialValue,
        clicks: 0
    });


    /*
        las propiedades del setCounteer tambiern se pueden destructurar
        estas no chocan las del useState por qu estan den diferente scope,
        y funciona de manera ascendente, si no las encuntra en su propio scope
        se brincara al otro
    */
    const handleClick = (num: number) => setCounterState(({counter, clicks}) => ({
        counter: counter + num,
        clicks: clicks + 1
    }));


    return (
        <>
            <h1>CounterBy: {counter}</h1>
            <h1>Clicks: {clicks}</h1>
            <button onClick={() => handleClick(1)}>+1</button>
            <button onClick={() => handleClick(5)}>+5</button>
        </>
    )
}
