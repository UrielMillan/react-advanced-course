import { useReducer } from "react";
import * as actions from "./actions/actions";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
}

export const CounterReducerComponent = () => {

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleReset = () => dispatch(actions.doReset());
    const handleIncrease = (value: number) => dispatch(actions.doIncreaseBy(value))


    return (
        <>
            <h1>Counter Reducer segmentado</h1>
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
