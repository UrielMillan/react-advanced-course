import { useContext } from "react";
import { productContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export const ProductTitle = ({ title }: { title?: string }) => {
    //usamos el contexto compartido de productcard
    const {product} = useContext(productContext);
    return (
        <span className={styles.productDescription}>{title ? title : product.title}</span>
    )
}