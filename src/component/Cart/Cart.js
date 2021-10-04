import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props);
    const { cart } = props;

    // const totalPrice = cart.reduce((previousValue, product) => previousValue + product.price, 0);
    let itemOrder = 0;
    let totalPrice = 0;
    for (const product of cart) {
        let quantity = product.quantity;
        if (!product.quantity) {
            quantity = 1;
        }
        itemOrder = itemOrder + quantity;
        totalPrice += product.price * quantity;
    }
    const shiping = totalPrice * .079;
    const totalBeforeTax = totalPrice + shiping;
    const tax = totalPrice * .10;
    const totalOrder = totalBeforeTax + tax;
    // console.log(totalPrice)

    return (
        <div className="cart">
            <h2>Order Summery</h2>
            <h3>Items Order: {itemOrder} </h3>
            <table>
                <tbody>
                    <tr>
                        <td>Items:</td>
                        <td>${totalPrice.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Shipping & Handling:</td>
                        <td>${shiping.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Total before tax:</td>
                        <td>${totalBeforeTax.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax:</td>
                        <td>${tax.toFixed(2)}</td>
                    </tr>
                    <tr className="order-total">

                        <td >Order Total:</td>
                        <td>${totalOrder.toFixed(2)}</td>

                    </tr>
                </tbody>
            </table>
            {props.children}
        </div>
    );
};

export default Cart;