import '../styles/App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Shop from './Shop';

const App = () => {
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
        <Nav cartQuantity={cartQuantity} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop cartQuantity={cartQuantity} setCartQuantity={setCartQuantity}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
