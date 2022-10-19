import { useState, useEffect, useRef } from "react";
import { UseProductArgs } from "../interfaces/interface";

export const useProduct = ({ onChange, product, value = 0, initialValues }: UseProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);

    const increaseBy = (value: number) => {

        let newVal = Math.max(counter + value, 0);
        if(initialValues?.maxCount) newVal = Math.min(newVal, initialValues.maxCount)


        setCounter(newVal);
        onChange && onChange({ count: newVal, product });
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }
    

    useEffect(() => {
        if (!isMounted.current) return
        setCounter(value)
    }, [value]);


    return {
        counter,
        increaseBy,
        isMaxCountReached: !!initialValues.count && initialValues.maxCount === counter,
        maxCount: initialValues.maxCount,
        reset,
    }
}