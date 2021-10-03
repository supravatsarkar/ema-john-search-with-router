import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import ProductReview from '../ProductReview/ProductReview';

const OrderReview = () => {
    const [products] = useProducts();
    const [carts, setCart] = useCart(products);
    const clickToRemove = key => {

        const newCart = carts.filter(product => product.key !== key);
        console.log(newCart);
        setCart(newCart);
        removeFromDb(key);
    }
    return (
        <div className="shop-container">
            <div className='products-container'>
                {carts.map(product => <ProductReview
                    key={product.key}
                    product={product}
                    clickToRemove={clickToRemove}
                ></ProductReview>)}
            </div>
            <div className="cart-container">
                <Cart cart={carts}></Cart>
            </div>
        </div>

    );
};

export default OrderReview;