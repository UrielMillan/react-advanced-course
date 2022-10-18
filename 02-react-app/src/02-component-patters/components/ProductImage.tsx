
import { useContext } from "react";
import { productContext } from "./ProductCard";
import noImage from '../asssets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ImageProps } from "../interfaces/interface";

export const ProductImage = ({ img, className, style }: ImageProps) => {

    //usamos el contexto compartido de productcard
    const { product } = useContext(productContext);
    let imgToShow: string;

    if (img) imgToShow = img;
    else if (product.img) imgToShow = product.img;
    else imgToShow = noImage;

    return (
        <img
            src={imgToShow}
            alt="product"
            className={`${styles.productImg} ${className}`}
            style={style}
        />
    )
}