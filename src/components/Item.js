import '../styles/Shop.css';
import { useState, useEffect } from 'react';

const Item = ({ item, addToCart }) => {
    const [quantity, setQuantity] = useState(1);
    const [isHidden, setIsHidden] = useState(true);

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

    const handleMouseEnter = () => {
        setIsHidden(false)
    };
    
    const handleMouseLeave = () => {
        setIsHidden(true)
    };

    return (
        <div className='item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={require(`../images/${item.img}.png`)} alt='img' />
            <div className="item-card">
                <div className='item-info'>
                    <p className='item-name'>{item.name}</p>
                    <p className='item-price'>${item.price}</p>
                    <p className='item-company'>{item.company}</p>
                </div>
                {!isHidden && <form className='item-form'>
                    <div className="quantity">
                        <button type='button' onClick={handleClickDecrement}>-</button>
                        <input type='number' value={quantity} onChange={handleInputChange} onBlur={handleInputBlur} maxLength='2' />
                        <button type='button' onClick={handleClickIncrement}>+</button>
                    </div>
                    <button className='add-to-cart-btn' type='button' onClick={handleClickAddToCart}>Add to cart</button>
                </form>}
            </div>
        </div>
    );
}

export default Item;
