import { useState, useEffect } from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems }) => {

    return (
        <div className='cart'>
            <h2>Cart</h2>
            <div className='cart-item-container'>
                {cartItems.map(item => {
                    return <CartItem item={item.item} quantity={item.quantity} key={item.item.id} />
                })}
            </div>
            <div className='cart-info'>
                <p>Total</p>
            </div>
        </div>
    );
};

export default Cart;