import cartImage from '../cart-outline.svg';

const CartIcon = ({cartCount}) => {

    return (
        <div className='cart'>
            <p className='cartCount'>{cartCount}</p>
            <img src={cartImage} alt='cart' className='cartIcon'/>
        </div>
    );
};

export default CartIcon;