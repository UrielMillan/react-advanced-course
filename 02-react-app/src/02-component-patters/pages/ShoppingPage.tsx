import ProductCard, { ProductImage, ProductTitle, ProductButtons } from "../components";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { product } from "../data/products";


export default function ShoppingPage() {
    const { shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div>
            <h1>  ShoppingPage </h1>
            <div>
                <ProductCard
                    product={product}
                    key={product.id}
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
                                <ProductImage  />
                                <ProductTitle  />
                                <ProductButtons />
                            </>
                        )
                    }

                </ProductCard>
            </div>
        </div>
    )
}
