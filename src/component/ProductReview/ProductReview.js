import React from 'react';

const ProductReview = (props) => {
    const { name, quantity, price, seller, key } = props.product;
    const clickToRemove = props.clickToRemove;
    return (
        <div>
            <h4 className="product-name">{name}</h4>
            <p><small>by: {seller}</small></p>
            <h4>&#x20b9; {price}</h4>
            <p><small>Quantity: {quantity}</small></p>
            <button onClick={() => clickToRemove(key)} className="add-to-cart-button">Remove Item</button>
        </div>
    );
};

export default ProductReview;