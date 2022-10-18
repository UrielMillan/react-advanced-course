
//Importamos todos los componentes relacionaods en el index para agruparlos
import { ProductCard as ProductCartHoc } from "./ProductCard";
import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductCardHOC } from "../interfaces/interface";

//Tambien podemos exportar los componentes por separado.
export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";


//Agrupamos todos los componentes dentro del componente principal para usarlos con la notacion de .
export const ProductCard: ProductCardHOC = Object.assign(ProductCartHoc,{
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCard