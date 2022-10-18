import ProductCard, { ProductImage, ProductTitle, ProductButtons } from "../components";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";
import '../styles/custom-styles.css'


export default function ShoppingPage() {
    const { shoppingCart, onProductCountChange } = useShoppingCart();
    
    return (
        <div>
            <h1>  ShoppingPage </h1>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                padding: 3
            }}>
                {
                    products.map(product => (
                        <ProductCard
                            product={product}
                            key={product.id}
                            className="bg-dark"
                            onChange={onProductCountChange}
                            value={shoppingCart[product.id]?.count || 0}
                        >
                            <ProductImage className='custom-image' />
                            <ProductTitle className='text-white' />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>

            <div className="shopping-cart">
                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard
                            product={product}
                            className="bg-dark"
                            style={{ width: '100px' }}
                            key={key}
                            value={product.count}
                            onChange={onProductCountChange}
                        >
                            <ProductImage className='custom-image' />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}
