import ProductCard, { ProductImage, ProductTitle, ProductButtons } from "../components";

const product = {
    id: '131',
    title: 'coffe mug',
    img: './coffee-mug.png'
}

export default function ShoppingPage() {
    return (
        <div>
            <h1>  ShoppingPage </h1>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                padding: 3
            }}>
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title="hola" />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}
