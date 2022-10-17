import { useCounter } from "../hooks/useCounter"

export const CounterEffectHook = () => {
    const {counter,  elementToAnimate, handleClick } = useCounter({maxCount:20});
    return (
        <>
            <h1>CounterEffectHook: </h1>
            <h2 ref={ elementToAnimate}>{counter}</h2>
            <button onClick={handleClick}>+1</button>
        </>
    )
}
