import '../styles/Shop.css';
import fellowOde from '../fellow-ode.jpg';
import { useState, useEffect } from 'react';

const Item = ({ item, addToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleInputChange = (e) => {
        setQuantity(e.target.value);
        if (e.target.value.length > e.target.maxLength) {
            setQuantity(e.target.value.slice(0, e.target.maxLength));
        }
    };

    const handleInputBlur = (e) => {
        if (e.target.value.length === 0 || e.target.value === '0') {
            setQuantity(1);
        }
    };

    const handleClickDecrement = (e) => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleClickIncrement = (e) => {
        if (quantity < 99) {
            setQuantity(parseInt(quantity) + 1);
        }
    };

    const handleClickAddToCart = (e) => {
        addToCart(item, quantity);
    };

    return (
        <div className='item'>
            <img src={fellowOde} alt='img' />
            <div className="item-info">
                <div className='item-name'>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                </div>
                <form className='item-form'>
                    <div className="quantity">
                        <button type='button' onClick={handleClickDecrement}>-</button>
                        <input type='number' value={quantity} onChange={handleInputChange} onBlur={handleInputBlur} maxLength='2' />
                        <button type='button' onClick={handleClickIncrement}>+</button>
                    </div>
                    <button className='add-to-cart-btn' type='button' onClick={handleClickAddToCart}>Add to cart</button>
                </form>
            </div>
        </div>
    );
}

export default Item;
