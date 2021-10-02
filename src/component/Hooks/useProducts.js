import { useState, useEffect } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                console.log('Load from useProducts', data);
                setProducts(data);
            });
    }, [])

    return [products];
}

export default useProducts;