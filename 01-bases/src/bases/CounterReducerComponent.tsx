import { useReducer } from "react";

//Interfaz del estado del reducer
interface CounterState {
    counter: number,
    previous: number,
    changes: number,
}


//Ttype es identico a interface, la diferencia es que con type puedes declarar typos de objetos especificos
type CounterAction = 
    | {type: 'increaseBy', payload:{ value: number }}
    | {type: 'reset'}

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
}


//Funcion reductora
const counterReducer = (state:CounterState, action: CounterAction):CounterState => {
    const {counter, changes} = state;
    switch (action.type) {
        case 'reset':
            return {counter:0, previous:0, changes:0};
        case 'increaseBy':
            return {
                counter:counter + action.payload.value, 
                previous:counter, 
                changes: changes + 1
            }
        default:
           return state
    }
}

export const CounterReducerComponent = () => {

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleReset = () => dispatch({type:'reset'});
    const handleIncrease = (value: number) => dispatch({type:'increaseBy', payload:{value}})


    return (
        <>
            <h1>Counter Reducer</h1>
            <pre>
                {JSON.stringify(counterState, null, 2)}
            </pre>
            <button onClick={() => handleIncrease(1)}>+1</button>
            <button onClick={() => handleIncrease(5)}>+5</button>
            <button onClick={() => handleIncrease(10)}>+10</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}
