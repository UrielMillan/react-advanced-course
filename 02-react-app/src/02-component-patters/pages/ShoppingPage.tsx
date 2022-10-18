import ProductCard, { ProductImage, ProductTitle, ProductButtons } from "../components";
import '../styles/custom-styles.css'

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
                <ProductCard product={product} className="bg-dark">
                    <ProductCard.Image className='custom-image' />
                    <ProductCard.Title title="hola" className='text-white' />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

                <ProductCard product={product} className="bg-dark">
                    <ProductImage className='custom-image' />
                    <ProductTitle className='text-white' />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard product={product} style={{
                    backgroundColor: 'red'
                }}>
                    <ProductImage/>
                    <ProductTitle/>
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}
