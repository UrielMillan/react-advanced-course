import { ReactElement } from "react";

//interfaz de las propiedades de ProductCard
export interface Props {
    product: Product,
    children?: ReactElement | ReactElement[]
}

//Interfaz de las propiedades del producto
export interface Product {
    id: string,
    title: string,
    img?: string
}

//interfaz de las propiedades del componente de botones
export interface ProductButtons {
    counter: number,
    increaseBy: (value: number) => void
}

//interfaz de las propiedades del contexto
export interface ProductContexProps {
    counter: number,
    increaseBy: (value: number) => void,
    product: Product
}

//Propiedades de productCardHOC
export interface ProductCardHOC {
    ({children, product}: Props): JSX.Element,
    Title: ({title}: {title?: string}) => JSX.Element,
    Image: ({img}: {img?: string}) => JSX.Element,
    Buttons:() => JSX.Element
}