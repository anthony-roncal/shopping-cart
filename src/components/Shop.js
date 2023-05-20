import '../styles/Shop.css';
import { useState, useEffect } from 'react';
import Item from './Item';
import uniqid from 'uniqid';

const Shop = ({ addToCart }) => {
  const [items, setItems] = useState([
    {
      name: 'test1',
      price: Math.floor(Math.random() * 50),
      id: uniqid()
    },
    {
      name: 'test2',
      price: Math.floor(Math.random() * 50),
      id: uniqid()
    },
    {
      name: 'test3',
      price: Math.floor(Math.random() * 50),
      id: uniqid()
    },
    {
      name: 'test4',
      price: Math.floor(Math.random() * 50),
      id: uniqid()
    },
    {
      name: 'test5',
      price: Math.floor(Math.random() * 50),
      id: uniqid()
    },
    {
      name: 'test6',
      price: Math.floor(Math.random() * 50),
      id: uniqid()
    },
    {
      name: 'test7',
      price: Math.floor(Math.random() * 50),
      id: uniqid()
    },
    {
      name: 'test8',
      price: Math.floor(Math.random() * 50),
      id: uniqid()
    },
    {
      name: 'test9',
      price: Math.floor(Math.random() * 50),
      id: uniqid()
    },
    {
      name: 'test10',
      price: Math.floor(Math.random() * 50),
      id: uniqid()
    }
  ]);

  return (
    <div className="shop">
        <h2>Shop</h2>
        <div className="item-container">
          {items.map(item => {
            return <Item name={item.name} price={item.price} addToCart={addToCart} key={item.id}/>
          })}
        </div>
    </div>
  );
}

export default Shop;
