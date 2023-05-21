import '../styles/Cart.css';
import fellowOde from '../fellow-ode.jpg';
import { useState, useEffect } from 'react';

const CartItem = ({ item, quantity }) => {

    return (
        <div className='cart-item'>
            <img src={fellowOde} alt='img'></img>
            <div className='cart-item-info'>
                <label>{item.name}</label>
                <p className='price'>${item.price * quantity}</p>
                <p className='quantity'>Qty: {quantity}</p>
                <p className='price-each'>(${item.price} each)</p>
            </div>
        </div>
    );
}

export default CartItem;
