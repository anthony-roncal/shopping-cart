import '../styles/App.css';
import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Shop from './Shop';

const App = () => {
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <HashRouter>
      <div className="App">
        <Nav cartQuantity={cartQuantity} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop cartQuantity={cartQuantity} setCartQuantity={setCartQuantity}/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
