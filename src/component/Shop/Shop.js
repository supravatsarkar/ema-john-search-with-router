import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import useCart from '../Hooks/useCart';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    // const [cart, setCart] = useState([]);
    const [cart, setCart] = useCart(products);
    const [serchedProducts, setSearchedProducts] = useState([]);

    useEffect(() => {
        console.log('Load data start')
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setSearchedProducts(data);
            });
    }, []);

    // useEffect(() => {
    //     // console.log('local storage load start');
    //     if (products.length) {
    //         const saveCart = getStoredCart();
    //         const storedCart = [];
    //         for (const key in saveCart) {
    //             const addedProducts = products.find(product => product.key === key);
    //             // console.log(key, addedProducts);
    //             if (addedProducts) {
    //                 const quantity = saveCart[key]
    //                 addedProducts.quantity = quantity; //New property add
    //                 storedCart.push(addedProducts);
    //             }
    //             // console.log();
    //         }
    //         console.log(storedCart);
    //         setCart(storedCart);
    //     }
    // }, [products]);

    const onSearch = event => {
        const serchValue = event.target.value;
        const searchProducts = products.filter(product => product.name.toLowerCase().includes(serchValue.toLowerCase()))
        // console.log(serchValue);
        setSearchedProducts(searchProducts);
        console.log(searchProducts.length);
    }
    const addToCartHandle = (productFromProduct) => {
        const exits = cart.find(pd => pd.key === productFromProduct.key);
        console.log(exits);
        let newCart = [];
        if (exits) {
            const rest = cart.filter(pd => pd.key !== productFromProduct.key);
            exits.quantity = exits.quantity + 1;
            newCart = [...rest, productFromProduct];
        }
        else {
            productFromProduct.quantity = 1;
            newCart = [...cart, productFromProduct];
        }
        console.log(newCart);
        setCart(newCart);
        addToDb(productFromProduct.key);
    }
    // console.log(cart);
    return (
        <>
            <div className="search-product">
                <input onChange={onSearch} type="text" placeholder="Search Product" />
            </div>
            <div className="shop-container">
                <div className='products-container'>
                    {/* <h2>Products: {products.length}</h2> */}
                    {
                        serchedProducts.map(product => <Product
                            key={product.key}
                            addToCartHandle={addToCartHandle}
                            product={product}>
                        </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className="review-order">Review your order</button>
                        </Link>
                    </Cart>
                </div>
            </div>

        </>
    );
};

export default Shop;