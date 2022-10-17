import { useState, useEffect,useRef } from "react";
import {gsap} from 'gsap';

const MAX_LIMIT = 10;
export const CounterEffect = () => {
    const [counter, setCounter] = useState(5);

    //type de referencia a los htmlelement
    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
        if(counter < MAX_LIMIT) setCounter(prev => prev + 1)
        //setCounter(prev => Math.min(prev + 1, MAX_LIMIT)); Solucion propuesta por Fer
    };

    useEffect(() => {

        if(counter < MAX_LIMIT) return;
        console.log('%cSe llego al valor máximo', 'color: blue; background-color: gray');

        //animaciones de gsap
        const tl = gsap.timeline();

        tl.to(counterElement.current, {y:-10, duration: 0.2, ease: 'ease.out'})
        tl.to(counterElement.current, {y:0, duration: 1, ease: 'bounce.out'})
        
    },[counter])

    return (
        <>
            <h1>CounterEffect: </h1>
            <h2 ref={counterElement}>{counter}</h2>
            <button onClick={handleClick}>+1</button>
        </>
    )
}
