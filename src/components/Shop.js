import '../styles/Shop.css';
import { useState, useEffect } from 'react';
import Item from './Item';
import Cart from './Cart';
import uniqid from 'uniqid';

const Shop = ({ setCartQuantity }) => {
  const [items, setItems] = useState([
    {
      name: 'test1',
      price: Math.ceil(Math.random() * 50),
      id: uniqid()
    },
    {
      name: 'test2',
      price: Math.ceil(Math.random() * 50),
      id: uniqid()
    },
    {
      name: 'test3',
      price: Math.ceil(Math.random() * 50),
      id: uniqid()
    },
    {
      name: 'test4',
      price: Math.ceil(Math.random() * 50),
      id: uniqid()
    },
    {
      name: 'test5',
      price: Math.ceil(Math.random() * 50),
      id: uniqid()
    },
    {
      name: 'test6',
      price: Math.ceil(Math.random() * 50),
      id: uniqid()
    },
    {
      name: 'test7',
      price: Math.ceil(Math.random() * 50),
      id: uniqid()
    },
    {
      name: 'test8',
      price: Math.ceil(Math.random() * 50),
      id: uniqid()
    },
    {
      name: 'test9',
      price: Math.ceil(Math.random() * 50),
      id: uniqid()
    },
    {
      name: 'test10',
      price: Math.ceil(Math.random() * 50),
      id: uniqid()
    }
  ]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, quantity) => {
    setCartItems(cartItems => [...cartItems, { item, quantity }]);
    // to-do: increase quantity if item is already in cartItems
  };

  useEffect(() => {
    let count = 0;
    for (let i = 0; i < cartItems.length; i++) {
      count += cartItems[i].quantity;
    }
    setCartQuantity(count);
  }, [cartItems]);

  return (
    <div className="shop">
      <div>
        <h2>Shop</h2>
        <div className="item-container">
          {items.map(item => {
            return <Item item={item} addToCart={addToCart} key={item.id} />
          })}
        </div>
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default Shop;
