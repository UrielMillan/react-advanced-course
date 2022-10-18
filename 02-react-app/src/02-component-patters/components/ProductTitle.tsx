import { useContext } from "react";
import { productContext } from "./ProductCard";
import styles from '../styles/styles.module.css';
import { TitleProps } from "../interfaces/interface";


export const ProductTitle = ({ title, className, style }: TitleProps) => {
    //usamos el contexto compartido de productcard
    const {product} = useContext(productContext);
    return (
        <span 
            className={`${styles.productDescription} ${className}`}
            style={style}
        >
            {title ? title : product.title}
        </span>
    )
}