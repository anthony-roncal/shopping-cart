import '../styles/Shop.css';
import { useState, useEffect } from 'react';
import Item from './Item';
import Cart from './Cart';
import uniqid from 'uniqid';

const Shop = ({ cartQuantity, setCartQuantity }) => {
  const [items, setItems] = useState([
    {
      name: 'Flatlander',
      company: "PT's Coffee Roasting Co.",
      price: Math.floor(Math.random() * 10) + 20,
      id: uniqid(),
      img: 'afqrtebpoa6w4mhhdwtx'
    },
    {
      name: 'Kickstart',
      company: "Greater Goods Coffee Co.",
      price: Math.floor(Math.random() * 10) + 20,
      id: uniqid(),
      img: 'nocubtg4czb5ycnonkrb'
    },
    {
      name: 'Milk & Honey Blend',
      company: "Feast",
      price: Math.floor(Math.random() * 10) + 20,
      id: uniqid(),
      img: 'oz8dktlpdj3xbahhkdlz'
    },
    {
      name: 'Familia Peixoto',
      company: "Peixoto",
      price: Math.floor(Math.random() * 10) + 20,
      id: uniqid(),
      img: 'njv69n0mnnndfvfsod1y'
    },
    {
      name: '71 House Blend',
      company: "Irving Farm",
      price: Math.floor(Math.random() * 10) + 20,
      id: uniqid(),
      img: 'nien9l92dj3bis3vbvof'
    },
    {
      name: 'High Five Blend',
      company: "Sparrows Coffee",
      price: Math.floor(Math.random() * 10) + 20,
      id: uniqid(),
      img: 'ws4dpc8rbmpft6ypixkp'
    },
    {
      name: 'Colorized',
      company: "Metric",
      price: Math.floor(Math.random() * 10) + 20,
      id: uniqid(),
      img: 'qescfn3ids56btix1wme'
    },
    {
      name: 'Rayos Del Sol',
      company: "Panther Coffee",
      price: Math.floor(Math.random() * 10) + 20,
      id: uniqid(),
      img: 'g656zaaxywbj1ccgm40l'
    },
    {
      name: 'City Blend',
      company: "Oren's",
      price: Math.floor(Math.random() * 10) + 20,
      id: uniqid(),
      img: 'kgk1c864zmpfju6jisur'
    },
    {
      name: 'Arboretum',
      company: "Small Planes Coffee",
      price: Math.floor(Math.random() * 10) + 20,
      id: uniqid(),
      img: 'oizqvvw0c5pa3ojeq5uu'
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
        <h2>Shop Beans</h2>
        <div className="item-container">
          {items.map(item => {
            return <Item item={item} addToCart={addToCart} key={item.id} />
          })}
        </div>
      </div>
      <Cart cartItems={cartItems} cartQuantity={cartQuantity} />
    </div>
  );
}

export default Shop;
