import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContexProps, Props } from '../interfaces/interface';
import styles from '../styles/styles.module.css';

//Creamos el el contexto de donde se van a servor los demas componentes relacionados
export const productContext = createContext({} as ProductContexProps);
const { Provider } = productContext;

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props)  => {

    //Usamos el hook de los productos para manejar la cantidad y los botones de mas y menos
    //pasamos las propiedades del producto y las del hook al provedor
    const { counter, increaseBy, isMaxCountReached, reset } = useProduct({onChange, product, value, initialValues});
    return (
        <Provider value={{ counter, increaseBy, product, maxCount: initialValues?.maxCount }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children!({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    increaseBy,
                    reset
                })}
            </div>
        </Provider>
    )
}
