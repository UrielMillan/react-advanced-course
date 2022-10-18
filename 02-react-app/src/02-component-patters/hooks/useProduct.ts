import { useState, useEffect, useRef } from "react";
import { UseProductArgs } from "../interfaces/interface";

export const useProduct = ({ onChange, product, value = 0 }: UseProductArgs) => {
    const [counter, setCounter] = useState(value);
    const isControlled = useRef(!!onChange);


    const increaseBy = (value: number) => {

        if (isControlled.current) {
            return onChange!({ count: value, product })
        }


        const newVal = Math.max(counter + value, 0)
        setCounter(newVal);
        onChange && onChange({ count: newVal, product });
    }

    useEffect(() => {
        setCounter(value)
    }, [value])

    return {
        counter,
        increaseBy,
    }
}