import '../styles/App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Shop from './Shop';

const App = () => {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const addToCart = (item, quantity) => {
    setCart(cart => [...cart, { item, quantity }]);
  };

  useEffect(() => {
    let count = 0;
    for (let i = 0; i < cart.length; i++) {
      count += cart[i].quantity;
    }
    setCartQuantity(count);
  }, [cart]);

  return (
    <BrowserRouter>
      <div className="App">
        <Nav cartQuantity={cartQuantity} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
