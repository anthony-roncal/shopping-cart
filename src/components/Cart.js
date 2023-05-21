import { useState, useEffect } from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems }) => {
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        let total = 0;
        for (let i = 0; i < cartItems.length; i++) {
            total += (cartItems[i].item.price * cartItems[i].quantity);
        }
        setCartTotal(total);
    }, [cartItems]);

    return (
        <div className='cart'>
            <h2>Cart</h2>
            <div className='cart-item-container'>
                {cartItems.map(item => {
                    return <CartItem item={item.item} quantity={item.quantity} key={item.item.id} />
                })}
            </div>
            <div className='cart-info'>
                <h3>Total</h3>
                <p>${cartTotal}</p>
            </div>
        </div>
    );
};

export default Cart;