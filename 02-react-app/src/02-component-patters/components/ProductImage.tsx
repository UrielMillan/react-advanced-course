
import { useContext } from "react";
import { productContext } from "./ProductCard";
import noImage from '../asssets/no-image.jpg';
import styles from '../styles/styles.module.css';

export const ProductImage = ({ img = '' }) => {

    //usamos el contexto compartido de productcard
    const { product } = useContext(productContext);
    let imgToShow: string;

    if (img) imgToShow = img;
    else if (product.img) imgToShow = product.img;
    else imgToShow = noImage;

    return (
        <img src={imgToShow} alt="product" className={styles.productImg} />
    )
}