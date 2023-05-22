import { useState, useEffect } from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, cartQuantity }) => {
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
                {(cartQuantity > 0) ?
                    <>
                        <div>
                            <h3>Total</h3>
                            <p className='total-quantity'>({cartQuantity} item{(cartQuantity > 1)&&'s'})</p>
                        </div>
                        <p className='cart-total'>${cartTotal}</p>
                    </>
                    : <p>Your cart is empty!</p>
                }
            </div>
        </div>
    );
};

export default Cart;