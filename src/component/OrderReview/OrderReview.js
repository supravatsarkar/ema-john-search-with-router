
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';

const OrderReview = () => {
    const [products] = useProducts();
    const [carts] = useCart(products);

    return (
        <div>
            <h2>Over Review</h2>
            <h3>{products.length}</h3>
            <h3>cart lenght: {carts.length}</h3>
        </div>
    );
};

export default OrderReview;