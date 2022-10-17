import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';


export const useCounter = ({ maxCount = 10 }) => {

    const [counter, setCounter] = useState(5);

    /*
        useRef guarda las referencia a nodos u objetos, es posible accesar a ellos usando
        la propiedad current de usRef, esto creo como una bloque
    */
    const elementToAnimate = useRef<any>(null);
    const tl = useRef(gsap.timeline());

    const handleClick = () => {
        if (counter < maxCount) setCounter(prev => prev + 1)
    };

    /*
        El useLayoutEffect es identico en funcionamiento al useEffect, la unica diferencia es que
        useLayoutEffect se ejecuta hasta que todo el virtual doom este construido
        
        Como recomendacion todos las funciones de efectos laterales deben tener una responsabilidad unica
    */

    //Este useLAyoutEffect construye la animacion de gsap cuando el doom este completamente construido
    useLayoutEffect(() => {
        if(!elementToAnimate.current) return;
        tl.current.to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' })
            .to(elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' })
            .pause()
    }, [])

    //Este useEffect ejecuta el comando play de la animacion cada que counter cambia de valor
    useEffect(() => {

       tl.current.play(0)
    }, [counter]);

    return {
        counter,
        handleClick,
        elementToAnimate
    }
}