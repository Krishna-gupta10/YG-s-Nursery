import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Store from './components/Store';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import './App.css'

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (plant) => {
    const existingItem = cartItems.find(item => item.title === plant.title);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.title === plant.title ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...plant, quantity: 1 }]);
    }
  };

  const handleUpdateQuantity = (title, newQuantity) => {
    setCartItems(cartItems.map(item =>
      item.title === title ? { ...item, quantity: newQuantity } : item
    ).filter(item => item.quantity > 0));
  };

  const handleRemoveItem = (title) => {
    setCartItems(cartItems.filter(item => item.title !== title));
  };


  return (
    <Router>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store onAddToCart={handleAddToCart} cartItems={cartItems} />} />
        <Route path="/cart" element={<Cart
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
        />
        } />
      </Routes>
    </Router>
  );
}
