import '../styles/Nav.css';
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

const Nav = ({ cartQuantity }) => {
    return (
        <div className='nav'>
            <h1>Logo Coffee</h1>
            <ul className='nav-links'>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/shop'>
                    <li>Shop</li>
                </Link>
                <li>
                    <CartIcon cartQuantity={cartQuantity}/>
                </li>
            </ul>
        </div>
    );
}

export default Nav;