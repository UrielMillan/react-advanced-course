import { ReactElement, CSSProperties } from "react";

//interfaz de las propiedades de ProductCard
export interface Props {
    product: Product,
    children?: ReactElement | ReactElement[],
    className?: string,
    style?: CSSProperties,
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
    Title: (Props: TitleProps) => JSX.Element,
    Image: (Props: ImageProps) => JSX.Element,
    Buttons:(Props: ButtonsProps) => JSX.Element
}

//Propiedades del componente Image
export interface ImageProps {
    img?: string,
    className?: string,
    style?: CSSProperties,
}

//Propiedades del componente Buttons
export interface ButtonsProps{
    className?: string,
    style?: CSSProperties,
}

//Propiedades del componente Title
export interface TitleProps {
    title?: string,
    className?: string,
    style?: CSSProperties,
}