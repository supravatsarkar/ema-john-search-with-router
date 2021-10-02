import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { Rating, RatingView } from 'react-simple-star-rating';


const Product = (props) => {
    // console.log(props);
    const { name, img, seller, price, stock, star } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <h4>&#x20b9; {price}</h4>
                <p><small>only {stock} left in stock - order soon</small></p>
                <RatingView ratingValue={star} /* RatingView Props */ />
                <br />
                <button
                    onClick={() => props.addToCartHandle(props.product)}
                    className="add-to-cart-button">
                    <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;