import cartImage from '../cart-outline.svg';

const CartIcon = ({cartQuantity}) => {

    return (
        <div className='cart'>
            <p className='cartQuantity'>{cartQuantity}</p>
            <img src={cartImage} alt='cart' className='cartIcon'/>
        </div>
    );
};

export default CartIcon;