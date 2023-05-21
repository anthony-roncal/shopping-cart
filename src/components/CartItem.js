import '../styles/Cart.css';
import fellowOde from '../fellow-ode.jpg';
import { useState, useEffect } from 'react';

const CartItem = ({ item, quantity }) => {

    return (
        <div className='cart-item'>
            <img src={fellowOde} alt='img'></img>
            <div className='cart-item-info'>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>Quantity: {quantity}</p>
                {/* to-do: display price & subtotal */}
            </div>
        </div>
    );
}

export default CartItem;
