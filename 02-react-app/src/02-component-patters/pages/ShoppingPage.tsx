import ProductCard, { ProductImage, ProductTitle, ProductButtons } from "../components";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { product } from "../data/products";
import '../styles/custom-styles.css'


export default function ShoppingPage() {
    const { shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div>
            <h1>  ShoppingPage </h1>
            <div>
                <ProductCard
                    product={product}
                    key={product.id}
                    className="bg-dark"
                    onChange={onProductCountChange}
                    value={shoppingCart[product.id]?.count || 0}
                    initialValues={{
                        count: 4,
                        maxCount: 10
                    }}
                >

                    {
                        ({reset, isMaxCountReached, increaseBy, count}) => (
                            <>
                                <ProductImage className='custom-image' />
                                <ProductTitle className='text-white' />
                                <ProductButtons className="custom-buttons" />

                                <button onClick={reset}>Reset</button>
                                <button onClick={() => increaseBy(-2)}>-2</button>
                                { !isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>}
                                <span>{count}</span>
                            </>
                        )
                    }


                </ProductCard>
            </div>
        </div>
    )
}
