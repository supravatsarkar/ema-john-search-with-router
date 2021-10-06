
import { useState, useEffect } from 'react';
import { getStoredCart } from '../../utilities/fakedb';

const useCart = products => {
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        if (products.length) {
            const saveCart = getStoredCart();
            let storedCart = [];
            for (const key in saveCart) {
                const addedProducts = { ...products.find(product => product.key === key) };
                if (addedProducts) {
                    const quantity = saveCart[key];
                    addedProducts.quantity = quantity; //New property add
                    storedCart.push(addedProducts);
                }
            }
            setCarts(storedCart);
        }
    }, [products]);
    return [carts, setCarts];
}
export default useCart;