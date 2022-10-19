import { useState } from "react";
import { ProductInCart, OnChangeArgs } from "../interfaces/interface";



export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: OnChangeArgs): void => {
        setShoppingCart(prev => {

            if (count === 0) {
                const { [product.id]: toDelete, ...rest } = prev;
                return rest
            }

            return {
                ...prev,
                [product.id]: { ...product, count }
            }
        });
    }

    return {
        shoppingCart,
        onProductCountChange
    }
}