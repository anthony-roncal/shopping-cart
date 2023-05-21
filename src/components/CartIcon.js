import cartImage from '../cart-outline.svg';

const CartIcon = ({ cartQuantity }) => {

    return (
        <div className='cartIcon'>
            <p className='cartQuantity'>{cartQuantity}</p>
            <img src={cartImage} alt='cart' className='cartImg'/>
        </div>
    );
};

export default CartIcon;