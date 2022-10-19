import { ReactElement, CSSProperties } from "react";
import { NumericLiteral } from "typescript";

//interfaz de las propiedades de ProductCard
export interface Props {
    product: Product,
    //children?: ReactElement | ReactElement[],
    children?: ( args: ProductCartHandlers ) => JSX.Element,
    className?: string,
    style?: CSSProperties,
    onChange?: (args: OnChangeArgs) => void,
    value?: number,
    initialValues?: InitialValues
}

export interface InitialValues{
    maxCount?: number,
    count?: number
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
    product: Product,
    maxCount?: number
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

//Interfaz de lista de productos, esta interfaz se extiend de los productos
export interface ProductInCart extends Product {
    count: number
}

//Interfaz de funcion onchange
export interface OnChangeArgs {
    product: Product,
    count: number
}


//Interfaz de argumentos de onchange
export interface UseProductArgs {
    product: Product,
    onChange?: (args: OnChangeArgs) => void,
    value?: number,
    initialValues?: InitialValues
}

export interface ProductCartHandlers {
    count: number,
    isMaxCountReached: boolean,
    maxCount? : number,
    product: Product,
    increaseBy: (values: number) => void,
    reset: () => void,
}